package com.vedci.wrapper.request;

public class UserResetConfirmWrapper {
	private String token;
	private String password;
	
	public boolean isValid() {
		if(token == null || password == null) {
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


}
