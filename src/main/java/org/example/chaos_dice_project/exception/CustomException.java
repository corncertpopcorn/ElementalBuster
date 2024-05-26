package org.example.chaos_dice_project.exception;

import lombok.Builder;

/**
 * 에러를 사용하기 위한 구현체
 */

public class CustomException extends RuntimeException {
    @Builder
    public CustomException(String message) {
        super(message);
    }

}