package com.vedci.wrapper.request;

public class UserLoginWrapper {
	private String email;
	private String password;
	
	public boolean isValid() {
		if(email == null || password == null) {
			return false;
		}
		
		return true;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
