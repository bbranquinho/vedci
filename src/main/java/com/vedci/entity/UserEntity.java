package com.vedci.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "tb_user")
public class UserEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private Long userId;
	
	@Column(name = "first_name", length = 30, nullable = false)
    private String firstName;
	
	@Column(name = "last_name", length = 70, nullable = false)
	private String lastName;
	
	@Column(name = "birthday", nullable = false)
	private Date birthday;
	
	@Column(name = "email", length = 100, nullable = false, unique = true)
	private String email;
	
	@Column(name = "password", length = 32, nullable = false)
	private String password;
	
	@Column(name = "image", length = 100, nullable = true)
	private String image;
	
	@Column(name = "registration_date", nullable = false)
	private Date registrationDate;
	
	@ManyToOne
    @JoinColumn(name="user_status_id")
	private UserStatusEntity status;

	@ManyToOne
    @JoinColumn(name="user_permission_id")
	private UserPermissionEntity permission;
	
	@ManyToOne
    @JoinColumn(name="user_gender_id")
	private UserGenderEntity gender;

	
	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
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

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Date getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(Date registrationDate) {
		this.registrationDate = registrationDate;
	}

	public UserStatusEntity getStatus() {
		return status;
	}

	public void setStatus(UserStatusEntity status) {
		this.status = status;
	}

	public UserPermissionEntity getPermission() {
		return permission;
	}

	public void setPermission(UserPermissionEntity permission) {
		this.permission = permission;
	}

	public UserGenderEntity getGender() {
		return gender;
	}

	public void setGender(UserGenderEntity gender) {
		this.gender = gender;
	}
}
