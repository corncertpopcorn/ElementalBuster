package org.example.chaos_dice_project.Service;

import org.example.chaos_dice_project.repository.AllRepository;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class AllService {

    private AllRepository allRepository;

    public AllService(AllRepository allRepository) {
        this.allRepository = allRepository;
    }

    public String testMethod() {
        return "123";
    }


}
