package com.vedci.controller;

import java.security.NoSuchAlgorithmException;
import java.util.Date;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vedci.annotation.Security;
import com.vedci.entity.UserEntity;
import com.vedci.repository.UserGenderRepository;
import com.vedci.repository.UserPermissionRepository;
import com.vedci.repository.UserRepository;
import com.vedci.repository.UserStatusRepository;
import com.vedci.security.Password;
import com.vedci.security.Token;
import com.vedci.utilities.ResponseJson;
import com.vedci.wrapper.request.UserConfirmWrapper;
import com.vedci.wrapper.request.UserLoginWrapper;
import com.vedci.wrapper.request.UserRegisterWrapper;
import com.vedci.wrapper.request.UserResetConfirmWrapper;
import com.vedci.wrapper.request.UserResetWrapper;

@RestController
@RequestMapping(path = "/user")
public class UserController{
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserPermissionRepository userPermissionRepository;
	
	@Autowired
	UserGenderRepository userGenderRepository;
	
	@Autowired
	UserStatusRepository userStatusRepository;
	
	@Security(access = Security.PUBLIC)
	@RequestMapping(method = RequestMethod.POST, path = "/register")
	public String register(@RequestBody UserRegisterWrapper userRegister) throws JSONException, NoSuchAlgorithmException {
		JSONObject response = new JSONObject();
		
		if(!userRegister.isValid()) {
			response.put("status", "error-form");
			return ResponseJson.body(response);
		}
		
		UserEntity user = userRepository.findByEmail(userRegister.getEmail());
		if(user != null) {
			response.put("status", "email_duplicate");
			return ResponseJson.body(response);
		}
		
		user = new UserEntity();
		
		user.setFirstName(userRegister.getFirstName());
		user.setLastName(userRegister.getLastName());
		user.setEmail(userRegister.getEmail());
		user.setBirthday(userRegister.getBirthday());
		user.setRegistrationDate(new Date());
		user.setPassword("");
		user.setPermission(userPermissionRepository.getOne(1l));
		user.setGender(userGenderRepository.getOne(userRegister.getGender()));
		user.setStatus(userStatusRepository.getOne(4l));

		user = userRepository.save(user);
		
		//Obtem o password
		String password = Password.encryptPassword(user.getUserId(), userRegister.getPassword(), user.getRegistrationDate());
		user.setPassword(password);
		
		userRepository.save(user);
		
		String validateUserToken = Token.generateToken(user, 432000); //Uso temporário | valido por 5 dias
		
		response.put("status", "success");
		response.put("validateUserToken", validateUserToken); //Uso temporário
		return ResponseJson.body(response);
	}
	
	@Security(access = Security.PUBLIC)
	@RequestMapping(method = RequestMethod.POST, path = "/login")
	public String login(@RequestBody UserLoginWrapper userLogin) throws JSONException, NoSuchAlgorithmException {
		JSONObject response = new JSONObject();
		
		//Dados de entrada inválidos
		if(!userLogin.isValid()) {
			response.put("status", "notfound");
			return ResponseJson.body(response);
		}
		
		UserEntity user = userRepository.findByEmail(userLogin.getEmail());
		
		//E-mail não econtrado
		if(user == null) {
			response.put("status", "notfound");
			return ResponseJson.body(response);
		}
		
		//Obtem o password
		String password = Password.encryptPassword(user.getUserId(), userLogin.getPassword(), user.getRegistrationDate());
		
		//Senha não confere
		if(!Password.comparePassword(password, user.getPassword())) {
			response.put("status", "notfound");
			return ResponseJson.body(response);
		}
		
		
		
		JSONObject userJson = new JSONObject();
		userJson.put("id", user.getUserId());
		userJson.put("firstName", user.getFirstName());
		userJson.put("lastName", user.getLastName());
		userJson.put("image", user.getImage());
		
		response.put("status", "success");
		response.put("token", Token.generateToken(user, 3600)); // Token valido por 3600 segundos
		response.put("user",  userJson);
				
		
		return ResponseJson.body(response);
	}
		
	@Security(access = Security.PUBLIC)
	@RequestMapping(method = RequestMethod.POST, path = "/confirm")
	public String confirm(@RequestBody UserConfirmWrapper userConfirm) throws JSONException {
		JSONObject response = new JSONObject();
		
		UserEntity user = Token.validateTokenAndGetUser(userConfirm.getToken(), userRepository);
		
		//Usuário não econtrado
		if(user == null) {
			response.put("status", false);
			return ResponseJson.body(response);
		}
		
		user.setStatus(userStatusRepository.getOne(1L));
		
		userRepository.save(user);
		
		response.put("status", true);
		return ResponseJson.body(response);
	}
	
	@Security(access = Security.PUBLIC)
	@RequestMapping(method = RequestMethod.POST, path = "/reset")
	public String reset(@RequestBody UserResetWrapper userReset) throws JSONException {
		JSONObject response = new JSONObject();
		
		UserEntity user = userRepository.findByEmail(userReset.getEmail());
		
		if(user == null) {
			response.put("status", false);
			return ResponseJson.body(response);
		}
		
		response.put("status", true);
		response.put("userResetToken", Token.generateToken(user, 86400)); // Token valido por 1 dia
		
		return ResponseJson.body(response);
	}
	
	@Security(access = Security.PUBLIC)
	@RequestMapping(method = RequestMethod.PUT, path = "/reset")
	public String resetConfirm(@RequestBody UserResetConfirmWrapper userResetConfirm) throws JSONException, NoSuchAlgorithmException {
		JSONObject response = new JSONObject();
		
		UserEntity user = Token.validateTokenAndGetUser(userResetConfirm.getToken(), userRepository);
		
		if(user == null) {
			response.put("status", false);
			return ResponseJson.body(response);
		}
		
		String password = Password.encryptPassword(user.getUserId(), userResetConfirm.getPassword(), user.getRegistrationDate());
		user.setPassword(password);		
		userRepository.save(user);
		
		response.put("status", true);
		return ResponseJson.body(response);
	}
}
