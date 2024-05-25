package org.example.chaos_dice_project.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping("/test")
    public Map<String, String> getTestData() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello from GET");
        return response;
    }

    @PostMapping("/test")
    public String createTestData(@RequestBody Map<String, String> request) {
        return "Received data: " + request.toString();
    }
}
