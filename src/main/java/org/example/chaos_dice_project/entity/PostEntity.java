package org.example.chaos_dice_project.entity;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "post", schema = "chaos_dice_project", catalog = "")
public class PostEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "idx")
    private int idx;
    @Basic
    @Column(name = "title")
    private String title;
    @Basic
    @Column(name = "content")
    private String content;
    @Basic
    @Column(name = "insert_date")
    private Timestamp insertDate;
    @Basic
    @Column(name = "state")
    private int state;
    @Basic
    @Column(name = "writer_idx")
    private int writerIdx;

    public int getIdx() {
        return idx;
    }

    public void setIdx(int idx) {
        this.idx = idx;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Timestamp getInsertDate() {
        return insertDate;
    }

    public void setInsertDate(Timestamp insertDate) {
        this.insertDate = insertDate;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public int getWriterIdx() {
        return writerIdx;
    }

    public void setWriterIdx(int writerIdx) {
        this.writerIdx = writerIdx;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PostEntity that = (PostEntity) o;
        return idx == that.idx && state == that.state && writerIdx == that.writerIdx && Objects.equals(title, that.title) && Objects.equals(content, that.content) && Objects.equals(insertDate, that.insertDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idx, title, content, insertDate, state, writerIdx);
    }
}
