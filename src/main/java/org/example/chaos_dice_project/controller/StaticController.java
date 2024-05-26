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

    @GetMapping("/")
    public String home() {
        return "redirect:/home.html";
    }
}
