package com.vedci.wrapper.request;

public class UserConfirmWrapper {
	private String token;	
	
	public boolean isValid() {
		if(token == null) {
			return false;
		}
		
		return true;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
}
