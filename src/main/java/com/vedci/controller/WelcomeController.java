package com.vedci.controller;

import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vedci.annotation.Security;
import com.vedci.entity.HighlightEntity;
import com.vedci.repository.HighlightRepository;
import com.vedci.utilities.ResponseJson;

@RestController
@RequestMapping(path = "/welcome")
public class WelcomeController{
	@Autowired
	HighlightRepository highlightRepository;
	
	@Security(access = Security.PUBLIC)
	@RequestMapping(method = RequestMethod.GET, path = "/highlight")
	public String register() throws JSONException{
		JSONArray response = new JSONArray();
		
		List<HighlightEntity> highlights = highlightRepository.findAll();
		
		for (HighlightEntity highlight : highlights) {
			response.put(new JSONObject()
				.put("id", highlight.getHighlightId())
				.put("name", highlight.getLab().getName())
				.put("url", highlight.getLab().getUrl())
				.put("price", highlight.getLab().getPrice())
				.put("image", highlight.getLab().getImage())
				.put("ranking", highlight.getLab().getRanking())
				.put("voteQuantity", highlight.getLab().getVoteQuantity())
				.put("bestSeller", highlight.isBestSeller())
			);
		}
		
		return ResponseJson.body(response);
	}
}
