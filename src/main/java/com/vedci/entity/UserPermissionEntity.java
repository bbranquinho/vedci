package com.vedci.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "tb_user_permission")
public class UserPermissionEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "user_permission_id", nullable = false)
    private Long userPermissionId;
	
	@Column(name = "description", length = 45, nullable = false, unique = true)
    private String description;
	
	@Column(name = "level",  nullable = false)
    private int level;

	public Long getUserPermissionId() {
		return userPermissionId;
	}

	public void setUserPermissionId(Long userPermissionId) {
		this.userPermissionId = userPermissionId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}
	

}
