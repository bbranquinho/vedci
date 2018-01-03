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
@Table(name = "tb_lab")
public class LabEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "lab_id", nullable = false)
    private Long labId;
	
	@Column(name = "name", length = 45, nullable = false)
    private String name;
	
	@Column(name = "url", length = 20, nullable = false, unique = true)
	private String url;
	
	@Column(name = "price", nullable = false)
	private Double price;
	
	@Column(name = "ask", nullable = false)
	private int ask;
	
	@Column(name = "reply", nullable = false)
	private int reply;
	
	@Column(name = "ranking", nullable = false)
	private int ranking;
	
	@Column(name = "vote_quantity", nullable = false)
	private int voteQuantity;
	
	@Column(name = "image", length = 100, nullable = true)
	private String image;
	
	@Column(name = "description", length = 500, nullable = false)
	private String description;
	
	@Column(name = "creation_date", nullable = false)
	private Date creationDate;
	
	@ManyToOne
    @JoinColumn(name="lab_status_id")
	private LabStatusEntity status;

	
	
	public Long getLabId() {
		return labId;
	}

	public void setLabId(Long labId) {
		this.labId = labId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public int getAsk() {
		return ask;
	}

	public void setAsk(int ask) {
		this.ask = ask;
	}

	public int getReply() {
		return reply;
	}

	public void setReply(int reply) {
		this.reply = reply;
	}

	public int getRanking() {
		return ranking;
	}

	public void setRanking(int ranking) {
		this.ranking = ranking;
	}

	public int getVoteQuantity() {
		return voteQuantity;
	}

	public void setVoteQuantity(int voteQuantity) {
		this.voteQuantity = voteQuantity;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public LabStatusEntity getStatus() {
		return status;
	}

	public void setStatus(LabStatusEntity status) {
		this.status = status;
	}
}
