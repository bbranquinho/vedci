package org.vedci.utils;

public final class ResourcePaths {

	///////////////////////////////////////////////////////////////
	// ROOT PATH
	///////////////////////////////////////////////////////////////

	public static final String ALL = "/**";
	
    public static final String ROOT_PATH = "/api";
    
    public static final String PUBLIC_ROOT_PATH = ROOT_PATH + "/public";
    
    public static final String PRIVATE_ROOT_PATH = ROOT_PATH + "/private";
    
    ///////////////////////////////////////////////////////////////
    // PRIVATE PATHS
    ///////////////////////////////////////////////////////////////


    public static final String USER_PATH =  PRIVATE_ROOT_PATH + "/user";
    
    public static final String PERMISSION_PATH = PRIVATE_ROOT_PATH + "/permission";


    ///////////////////////////////////////////////////////////////
    // PUBLIC PATHS
    ///////////////////////////////////////////////////////////////

    public static final String LOGIN_PATH = PUBLIC_ROOT_PATH + "/login";

    public static final String LOGOUT_PATH = PUBLIC_ROOT_PATH + "/logout";

    private ResourcePaths() {}

}
