package com.vedci.wrapper.request;

import java.util.Date;

public class UserRegisterWrapper {
	private String firstName;
	private String lastName;
	private Long gender;
	private String email;
	private String password;
	private Date birthday;
	
	
	public boolean isValid() {
		if(firstName == null || lastName == null || gender <= 0 || email == null || password == null || birthday == null) {
			return false;
		}
		
		if(firstName.length() < 2 || lastName.length() <= 2) {
			return false;
		}
		
		return true;
	}
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Long getGender() {
		return gender;
	}
	public void setGender(Long gender) {
		this.gender = gender;
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
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	
	
}
