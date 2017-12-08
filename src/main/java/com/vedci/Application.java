package com.vedci;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.session.SessionAutoConfiguration;
import org.springframework.context.ApplicationContext;

import java.net.InetAddress;
import java.net.UnknownHostException;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class, SessionAutoConfiguration.class })
public class Application {

    private static final Logger LOGGER = LogManager.getLogger(Application.class);

    public static void main(String[] args) throws UnknownHostException {
        ApplicationContext app =  SpringApplication.run(Configuration.class, args);

        String applicationName = app.getEnvironment().getProperty("spring.application.name");
        String contextPath = app.getEnvironment().getProperty("server.contextPath");
        String port = app.getEnvironment().getProperty("server.port");
        String hostAddress = InetAddress.getLocalHost().getHostAddress();

        LOGGER.info("\n|------------------------------------------------------------" +
                "\n| Application '" + applicationName + "' is running! Access URLs:" +
                "\n|   Local:      http://127.0.0.1:" + port + contextPath +
                "\n|   External:   http://" + hostAddress + ":" + port + contextPath +
                "\n|------------------------------------------------------------");
    }
}
