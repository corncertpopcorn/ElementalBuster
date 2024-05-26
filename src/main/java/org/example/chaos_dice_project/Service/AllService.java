package org.example.chaos_dice_project.Service;

import org.example.chaos_dice_project.repository.PostRepository;
import org.example.chaos_dice_project.repository.ReplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class AllService {

    private PostRepository postRepository;
    private ReplyRepository replyRepository;


    public AllService(PostRepository postRepository, ReplyRepository replyRepository) {
        this.postRepository = postRepository;
        this.replyRepository = replyRepository;
    }

    /** 게시글 리스트 보기 */
    public List<Map<String, String>> showPostList(Integer postIdx) {
        return postRepository.showPostList(postIdx);
    }

    /** 게시글 작성 */
    @Transactional
    public void createPost(String title, String content, Integer writerIdx) {
        postRepository.createPost(title, content, writerIdx);
    }

    /** 게시글 수정 */
    @Transactional
    public void updatePost(String title, String content, Integer idx) {
        postRepository.updatePost(title, content, idx);
    }

    /** 게시글 삭제 */
    @Transactional
    public void deletePost(Integer idx) {
        postRepository.deletePost(idx);
    }

    /** 댓글 작성 */
    @Transactional
    public void createReply(Integer parentIdx, Integer writerIdx, Integer postIdx, String content) {
        replyRepository.createReply(parentIdx, writerIdx, postIdx, content);
    }

    /** 댓글 삭제 */
    @Transactional
    public void deleteReply(Integer idx) {
        replyRepository.deleteReply(idx);
    }


}
