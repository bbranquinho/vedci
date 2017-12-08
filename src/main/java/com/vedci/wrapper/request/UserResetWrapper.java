package com.vedci.wrapper.request;

public class UserResetWrapper {
	private String email;	
	
	public boolean isValid() {
		if(email == null) {
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
}
