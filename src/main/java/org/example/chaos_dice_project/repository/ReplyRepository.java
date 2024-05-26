package org.example.chaos_dice_project.repository;

import org.example.chaos_dice_project.entity.PostEntity;
import org.example.chaos_dice_project.entity.ReplyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface ReplyRepository extends JpaRepository<ReplyEntity, String> {



    @Query(value = "INSERT INTO reply (parent_idx, writer_idx, post_idx, content) VALUES (:parentIdx, :writerIdx, :postIdx, :content)", nativeQuery = true)
    public void createReply(@Param("parentIdx") Integer parentIdx,
                            @Param("writerIdx") Integer writerIdx,
                            @Param("postIdx") Integer postIdx,
                            @Param("content") String content);

    @Query(value = "DELETE FROM reply WHERE idx = :idx", nativeQuery = true)
    public void deleteReply(@Param("idx") Integer idx);

    @Query(value = "UPDATE reply SET content = :content WHERE idx = :idx", nativeQuery = true)
    public void updateReply(@Param("content") String content, @Param("idx") Integer idx);

}
