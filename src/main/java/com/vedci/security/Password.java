package com.vedci.security;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Date;

public final class Password {
	public static final String encryptPassword(Long idUser, String password, Date creationDate) throws NoSuchAlgorithmException {
		String tokenPassowd = idUser.toString()+password+creationDate.getTime();

		MessageDigest messageDigest = MessageDigest.getInstance("MD5");
		messageDigest.update(tokenPassowd.getBytes(),0,tokenPassowd.length());
		
		return normalizeMD5(new BigInteger(1,messageDigest.digest()).toString(16));
	}
	
	
	public static final boolean comparePassword(String password1, String passowrd2) {
		return password1.equals(passowrd2);
	}
	
	
	public static final String normalizeMD5(String md5) {
		md5 = "00000000000000000000000000000000" + md5;
		return md5.substring(md5.length() - 32);
	}
}
