package org.example.chaos_dice_project.controller;

import org.example.chaos_dice_project.Service.AllService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AllController {

    private final AllService allService;

    @Autowired
    public AllController(AllService allService) {
        this.allService = allService;
    }

    /** 게시글 클릭 - 게시글 리스트 보기 */
    @GetMapping("/click/post")
    public ResponseEntity<?> showPostList(Integer postIdx) {
        try {
            return ResponseEntity.ok(allService.showPostList(postIdx));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    /** 게시글 작성 */
    @PostMapping("/create/post")
    public ResponseEntity<?> createPost(@RequestParam String title, @RequestParam String content, @RequestParam Integer writerIdx) {
        try {
            allService.createPost(title, content, writerIdx);
            return ResponseEntity.ok("Post created successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    /** 게시글 수정 */
    @PutMapping("/edit/post")
    public ResponseEntity<?> updatePost(@RequestParam Integer idx, @RequestParam String title, @RequestParam String content) {
        try {
            allService.updatePost(title, content, idx);
            return ResponseEntity.ok("Post updated successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    /** 게시글 삭제 */
    @DeleteMapping("/delete/post")
    public ResponseEntity<?> deletePost(@RequestParam Integer idx) {
        try {
            allService.deletePost(idx);
            return ResponseEntity.ok("Post deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    /** 댓글 작성 */
    @PostMapping("/create/reply")
    public ResponseEntity<?> createReply(@RequestParam(required = false) Integer parentIdx, @RequestParam Integer writerIdx, @RequestParam Integer postIdx, @RequestParam String content) {
        try {
            allService.createReply(parentIdx, writerIdx, postIdx, content);
            return ResponseEntity.ok("Reply created successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    /** 댓글 삭제 */
    @DeleteMapping("/delete/reply")
    public ResponseEntity<?> deleteReply(@RequestParam Integer idx) {
        try {
            allService.deleteReply(idx);
            return ResponseEntity.ok("Reply deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
