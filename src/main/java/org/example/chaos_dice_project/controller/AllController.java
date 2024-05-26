package org.example.chaos_dice_project.controller;


import org.example.chaos_dice_project.Service.AllService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AllController {

    private AllService allService;

    public AllController(AllService allService) {
        this.allService = allService;
    }

    @GetMapping("/create/category")
    public ResponseEntity createPostListCategory() {
        try {
            return ResponseEntity.ok(allService.testMethod());
        }catch (Exception e) {
            return ResponseEntity.ok(e.getMessage());
        }
    }


}
