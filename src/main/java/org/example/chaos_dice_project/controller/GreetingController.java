package org.example.chaos_dice_project.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    @CrossOrigin(origins = "http://localhost:3000") // React가 실행되는 주소
    @GetMapping("/greeting")
    public String greeting() {
        return "현서는메붕이";
    }
}
