package com.vedci.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "tb_lab_status")
public class LabStatusEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "lab_status_id", nullable = false)
    private Long labStatusId;
	
	@Column(name = "description", length = 45, nullable = false, unique = true)
    private String description;
	
	
	@Column(name = "active",  nullable = false)
    private boolean active;

	public Long getLabStatusId() {
		return labStatusId;
	}

	public void setLabStatusId(Long labStatusId) {
		this.labStatusId = labStatusId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

}
