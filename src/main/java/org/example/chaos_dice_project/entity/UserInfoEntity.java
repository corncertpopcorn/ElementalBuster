package org.example.chaos_dice_project.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "user_info", schema = "chaos_dice_project", catalog = "")
public class UserInfoEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "idx")
    private int idx;
    @Basic
    @Column(name = "nickname")
    private String nickname;
    @Basic
    @Column(name = "state")
    private int state;

    public int getIdx() {
        return idx;
    }

    public void setIdx(int idx) {
        this.idx = idx;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserInfoEntity that = (UserInfoEntity) o;
        return idx == that.idx && state == that.state && Objects.equals(nickname, that.nickname);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idx, nickname, state);
    }
}
