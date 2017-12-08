package com.vedci.controller;

import org.json.JSONException;
import org.json.JSONObject;

import com.vedci.utilities.ResponseJson;

public final class ErrorController {

	public static final String security() throws JSONException {
		JSONObject response = new JSONObject();
		response.put("status", "error");
		response.put("code", "M_E5001");
		
		return ResponseJson.intercept(response);
	}
	
	public static final String unauthorized() throws JSONException {
		JSONObject response = new JSONObject();
		response.put("status", "error");
		response.put("code", "M_E4001");
		
		return ResponseJson.intercept(response);
	}
	
	public static final String forbidden() throws JSONException {
		JSONObject response = new JSONObject();
		response.put("status", "error");
		response.put("code", "M_E4003");
		
		return ResponseJson.intercept(response);
	}
	
}
