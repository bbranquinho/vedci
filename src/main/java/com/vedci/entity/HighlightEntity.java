package com.vedci.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



@Entity
@Table(name = "tb_highlight")
public class HighlightEntity {
	
	@Id
	@Column(name = "highlight_id")
	private Long HighlightId;
	
	@ManyToOne
    @JoinColumn(name="lab_id")
	private LabEntity lab;
	
	@Column(name = "best_seller",  nullable = false)
    private boolean bestSeller;

	
	public Long getHighlightId() {
		return HighlightId;
	}


	public void setHighlightId(Long highlightId) {
		HighlightId = highlightId;
	}


	public LabEntity getLab() {
		return lab;
	}


	public void setLab(LabEntity lab) {
		this.lab = lab;
	}


	public boolean isBestSeller() {
		return bestSeller;
	}


	public void setBestSeller(boolean bestSeller) {
		this.bestSeller = bestSeller;
	}
}
