package com.vedci.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "tb_user_status")
public class UserStatusEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "user_status_id", nullable = false)
    private Long userStatusId;
	
	@Column(name = "description", length = 45, nullable = false, unique = true)
    private String description;
	
	@Column(name = "active",  nullable = false)
    private boolean active;
	

}