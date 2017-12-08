package com.vedci.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_user_gender")
public class UserGenderEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "user_gender_id", nullable = false)
    private Long userGenderId;
	
	@Column(name = "description", length = 45, nullable = false, unique = true)
    private String description;
	
}
