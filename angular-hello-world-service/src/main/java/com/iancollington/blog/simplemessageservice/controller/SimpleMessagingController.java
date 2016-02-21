package com.iancollington.blog.simplemessageservice.controller;

import com.iancollington.blog.simplemessageservice.domain.Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/message")
public class SimpleMessagingController {

    private static final Logger LOGGER = LoggerFactory.getLogger(SimpleMessagingController.class);

    @RequestMapping("/welcome")
    public Message sayHello() {
        LOGGER.info("Saying Hello...");

        return new Message("Hello World!");
    }
}
