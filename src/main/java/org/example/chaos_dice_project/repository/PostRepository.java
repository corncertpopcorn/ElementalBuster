package org.example.chaos_dice_project.repository;

import org.example.chaos_dice_project.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface PostRepository extends JpaRepository<PostEntity, String> {

    @Query(value = "SELECT post.title, post.content, user_info.nickname FROM post JOIN user_info ON post.writer_idx = user_info.idx WHERE post.idx <= :idx ORDER BY post.idx DESC LIMIT 5", nativeQuery = true)
    public List<Map<String, String>> showPostList(@Param("idx") Integer idx);

    @Query(value = "SELECT post.title, post.content, user_info.nickname FROM post JOIN user_info ON post.writer_idx = user_info.idx WHERE post.idx <= :idx ORDER BY post.idx DESC LIMIT 5", nativeQuery = true)
    public List<Map<String, String>> createPost(@Param("idx") Integer idx);

    @Query(value = "INSERT INTO post (title, content, writer_idx) VALUES (:title, :content, :writerIdx)", nativeQuery = true)
    public void createPost(@Param("title") String title,
                           @Param("content") String content,
                           @Param("writerIdx") Integer writerIdx);

    @Query(value = "INSERT INTO reply (parent_idx, writer_idx, post_idx, content) VALUES (:parentIdx, :writerIdx, :postIdx, :content)", nativeQuery = true)
    public void createReply(@Param("parentIdx") Integer parentIdx,
                            @Param("writerIdx") Integer writerIdx,
                            @Param("postIdx") Integer postIdx,
                            @Param("content") String content);

    @Query(value = "DELETE FROM post WHERE idx = :idx", nativeQuery = true)
    public void deletePost(@Param("idx") Integer idx);

    @Query(value = "UPDATE post SET title = :title, content = :content WHERE idx = :idx", nativeQuery = true)
    public void updatePost(@Param("title") String title, @Param("content") String content, @Param("idx") Integer idx);

    @Query(value = "DELETE FROM reply WHERE idx = :idx", nativeQuery = true)
    public void deleteReply(@Param("idx") Integer idx);

    @Query(value = "UPDATE reply SET content = :content WHERE idx = :idx", nativeQuery = true)
    public void updateReply(@Param("content") String content, @Param("idx") Integer idx);

}
