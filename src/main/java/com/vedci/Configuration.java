package com.vedci;

import java.io.IOException;
import java.lang.reflect.Method;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.session.SessionAutoConfiguration;
import org.springframework.boot.autoconfigure.web.WebMvcRegistrationsAdapter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.io.Resource;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.mvc.method.RequestMappingInfo;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;
import org.springframework.web.servlet.resource.PathResourceResolver;

import com.vedci.repository.UserRepository;
import com.vedci.security.Security;


@EnableAutoConfiguration(exclude = {SecurityAutoConfiguration.class, SessionAutoConfiguration.class })
@ComponentScan(basePackageClasses = Application.class)
public class Configuration extends WebMvcConfigurerAdapter{
	@Autowired
	UserRepository userRepository;
	private static final String API_PREFIX = "/api/";
	
	@Override
    public void addInterceptors(InterceptorRegistry registry){
        registry.addInterceptor(new Security(userRepository)).addPathPatterns("/**");
    }
	
	@Bean
	WebMvcRegistrationsAdapter restPrefixAppender() {
	    return new WebMvcRegistrationsAdapter() {
	        @Override
	        public RequestMappingHandlerMapping getRequestMappingHandlerMapping() {
	            return new RequestMappingHandlerMapping() {
	                @Override
	                protected RequestMappingInfo getMappingForMethod(Method method, Class<?> handlerType) {
	                    RequestMappingInfo mappingForMethod = super.getMappingForMethod(method, handlerType);
	                    if (mappingForMethod != null) {
	                        return RequestMappingInfo.paths(API_PREFIX).build().combine(mappingForMethod);
	                    } else {
	                        return null;
	                    }
	                }
	            };
	        }
	    };
	}
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		
		registry.addResourceHandler("/**").addResourceLocations("/").resourceChain(true)
				.addResolver(new PathResourceResolver() {
					@Override
					protected Resource getResource(String resourcePath, Resource location) throws IOException {
						Resource requestedResource = location.createRelative(resourcePath);
						
						if(requestedResource.exists() && requestedResource.isReadable()) {
							return requestedResource;
						}else {
							requestedResource = location.createRelative("index.html");
						}
						
						return requestedResource;
						/*
						return requestedResource.exists() && requestedResource.isReadable() ? requestedResource
								: new ClassPathResource("/index.html");
								*/
					}
				});
	}
	
	
	@Bean
	public FilterRegistrationBean corsFilter() {
	    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    CorsConfiguration config = new CorsConfiguration();
	    config.addAllowedOrigin("*");
	    config.addAllowedHeader("*");
	    config.addAllowedMethod("*");
	    source.registerCorsConfiguration("/**", config);
	    FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
	    bean.setOrder(0);
	    return bean;
	}

	
}
