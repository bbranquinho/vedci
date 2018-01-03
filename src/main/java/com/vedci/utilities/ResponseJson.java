package com.vedci.utilities;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public final class ResponseJson {
	
	public static final String bodyAndIntercept(JSONObject intercept, JSONObject body) throws JSONException {		
		return new JSONObject()
				.put("intercept", intercept)
				.put("body", body)
				.toString();
	}
	
	public static final String bodyAndIntercept(JSONObject intercept, JSONArray body) throws JSONException {		
		return new JSONObject()
				.put("intercept", intercept)
				.put("body", body)
				.toString();
	}
	
	public static final String body(JSONObject body) throws JSONException {		
		return new JSONObject()
				.put("intercept", new JSONObject())
				.put("body", body)
				.toString();
	}
	
	public static final String body(JSONArray body) throws JSONException {		
		return new JSONObject()
				.put("intercept", new JSONObject())
				.put("body", body)
				.toString();
	}
	
	public static final String intercept(JSONObject intercept) throws JSONException {		
		return new JSONObject()
				.put("intercept", intercept)
				.put("body", new JSONObject())
				.toString();
	}
}
