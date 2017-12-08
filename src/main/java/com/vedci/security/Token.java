package com.vedci.security;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.vedci.entity.UserEntity;
import com.vedci.repository.UserRepository;

public final class Token {
	
	private static final String keyOne = "D0iSgkguUhpTQFuaFVIz6YJRfCfZjt7d";
	private static final String keyTwo = "g8Rde5xFjK96WyaEuzw1il1TaiWI8rD2";
	private static final String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	
	@Autowired
	UserRepository userRepository;
	
	/**
	 * Valida o token informado, caso seja válido retorna o usuário relacionado.
	 * 
	 * @param token
	 * @param userRepository
	 * @return
	 */
	public static final UserEntity validateTokenAndGetUser(String token, UserRepository userRepository) {

		//Token inválido
		if(token == null) {
			return null;
		}
		
		String tokens[] = token.split("-");
		
		//Token inválido
		if(tokens.length != 3) {
			return null;
		}
		
		Long timeNow = (System.currentTimeMillis()) / 1000;
		Long expiresToken  = decodeBase64(tokens[2]);
		Long userId = decodeBase64(tokens[0]);
		
		//Identificadores inválidos
		if(expiresToken == null || userId == null) {
			return null;
		}
		
		//Token expidado
		if(timeNow > expiresToken) {
			return null;
		}
		
		UserEntity user = userRepository.findByUserId(userId);
		
		//Usuário não econtrado
		if(user == null) {
			return null;
		}
		
		String salt = tokens[1].substring(32, 64);
		
		String tokenPassowd = keyOne + expiresToken.toString() + user.getPassword() + salt + keyTwo; 
		
		try {
			MessageDigest messageDigest = MessageDigest.getInstance("MD5");
			messageDigest.update(tokenPassowd.getBytes(),0,tokenPassowd.length());
			
			String newTokenPassword = Password.normalizeMD5(new BigInteger(1,messageDigest.digest()).toString(16));

			//Checa se o token é valido
			if(tokens[1].equals(newTokenPassword+salt)) {
				return user;
			}else {
				return null;
			}
		} catch (NoSuchAlgorithmException e) {
			return null;
		}
	}
	
	/**
	 * Gera o token de validação
	 * 
	 * @param user
	 * @return
	 */
	public static final String generateToken(UserEntity user, int validityInSeconds) {
		String salt = RandomStringUtils.random(32, characters);
	
		Long expires = (System.currentTimeMillis()/ 1000l) + validityInSeconds;
		
		String tokenPassowd = keyOne + expires.toString() + user.getPassword() + salt + keyTwo; 
		
		try {
			MessageDigest messageDigest = MessageDigest.getInstance("MD5");
			messageDigest.update(tokenPassowd.getBytes(),0,tokenPassowd.length());
			
			String tokenPassowdMd5 = Password.normalizeMD5(new BigInteger(1,messageDigest.digest()).toString(16));
			
			return encodeBase64(user.getUserId()) + "-" + tokenPassowdMd5 + salt + "-" + encodeBase64(expires);
		} catch (NoSuchAlgorithmException e) {
			return null;
		}
	}
	
	/**
	 * Codifica um número Long em base64 personalizada
	 * 
	 * @param number
	 * @return
	 */
	private static final String encodeBase64(Long number) {
		String str = number.toString();
		String random = RandomStringUtils.random(9,characters);
		int rest = str.length() % 3;
		
		if(rest == 1) {
			str = "00"+str;
		}else if(rest == 2){
			str = "0"+str;
		}
		
		String encode = Base64.getEncoder().encodeToString(str.getBytes());
		
		return random + encode;
	}
	
	
	/**
	 * Decodifica um número Long em base64 personalizada
	 * 
	 * @param string
	 * @return
	 */
	private static final Long decodeBase64(String string) {
		if(string.length() <= 9) {
			return null;
		}
		
		string = string.substring(9);
		try {
			string = new String(Base64.getDecoder().decode(string.getBytes()));
		
			return Long.parseLong(string);
		}catch(Exception ex) {
			return null;
		}
	}
}
