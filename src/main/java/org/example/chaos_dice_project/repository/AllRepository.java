package org.example.chaos_dice_project.repository;

import org.example.chaos_dice_project.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AllRepository extends JpaRepository<PostEntity, String> {
/*
    @Query(value = "SELECT COUNT(*) FROM post WHERE idx = :idx", nativeQuery = true)
    public int checkExist (@Param("idx") Integer idx);

 */

}
