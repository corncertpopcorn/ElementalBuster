package org.example.chaos_dice_project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class StaticController {

    @GetMapping("/home")
    public String homePage(Model model) {
        model.addAttribute("message", "Hello from Spring Boot with Thymeleaf!");
        return "home"; // home.html 템플릿을 반환
    }

    @GetMapping("/post_list_page")
    public String testPage(Model model) {
        return "post_list_page";
    }

    @GetMapping("/store_page")
    public String storePage(Model model) {
        return "store_page";
    }

    @GetMapping("/login_page")
    public String loginPage(Model model) {
        return "login_page";
    }

    @GetMapping("/post_write_page")
    public String postWritePage(Model model) {
        return "post_write_page";
    }

    @GetMapping("/post_detail_page")
    public String postDetailPage(Model model) {
        return "post_detail_page";
    }
}

