package com.vedci.security;

import java.lang.reflect.Method;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.vedci.controller.ErrorController;
import com.vedci.entity.UserEntity;
import com.vedci.repository.UserRepository;

public class Security implements HandlerInterceptor{
	private UserRepository userRepository;
	private static boolean authenticated = false;
	private static UserEntity userAuthenticated = null;
	
	public Security(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception exception) throws Exception {
		// TODO Auto-generated method stub
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		
		HandlerMethod hm = (HandlerMethod) handler;
		Method method = hm.getMethod();
		int needAccessLevel = 0;
		
		if(method.getDeclaringClass().isAnnotationPresent(RestController.class)){
	
			if(method.isAnnotationPresent(com.vedci.annotation.Security.class))
			{
				needAccessLevel = method.getAnnotation(com.vedci.annotation.Security.class).access();
				
				//Acesso público, não requer altenticação
				if(needAccessLevel <= com.vedci.annotation.Security.PUBLIC) {
					return true;
				}
				
				userAuthenticated = Token.validateTokenAndGetUser(request.getHeader("auth-token"), userRepository);
				
				//Autenticação requerida
				if(userAuthenticated == null) {
					response.resetBuffer();
					response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
					response.getOutputStream().write(ErrorController.unauthorized().getBytes());
					return false;
				}else{
					authenticated = true;
				}
				
				//Permissções de acesso insuficientes
				if(needAccessLevel > userAuthenticated.getPermission().getLevel()) {
					response.resetBuffer();
					response.setStatus(HttpServletResponse.SC_FORBIDDEN);
					response.getOutputStream().write(ErrorController.forbidden().getBytes());
					return false;
				}
				
			}else {
				//Erro interno, anotação Security não encontrada
				response.resetBuffer();
				response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
				response.getOutputStream().write(ErrorController.security().getBytes());
				return false;
			}
		}else{
			//Erro interno, anotação RestController não encontrada
			response.resetBuffer();
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			response.getOutputStream().write(ErrorController.security().getBytes());
			return false;
		}
		return true;
	}
	
	public static boolean isAuthenticated() {
		return Security.authenticated;
	}
	
	
	public static UserEntity getUserAuthenticated() {
		return Security.userAuthenticated;
	}
	
}
