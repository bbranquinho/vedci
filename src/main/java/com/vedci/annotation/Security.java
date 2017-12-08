package com.vedci.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD) //Para usar somente em métodos
public @interface Security {
	public static final int PUBLIC = 1000;
	public static final int USER   = 2000;
	public static final int ADMIN  = 3000;
	public static final int MASTER = 4000;
	
	public int access();
}