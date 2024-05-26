package org.example.chaos_dice_project.entity;


import jakarta.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;
@Entity
@Table(name = "reply", schema = "chaos_dice_project", catalog = "")
public class ReplyEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "idx")
    private int idx;
    @Basic
    @Column(name = "parent_idx")
    private Integer parentIdx;
    @Basic
    @Column(name = "writer_idx")
    private int writerIdx;
    @Basic
    @Column(name = "post_idx")
    private int postIdx;
    @Basic
    @Column(name = "content")
    private String content;
    @Basic
    @Column(name = "insert_date")
    private Timestamp insertDate;
    @Basic
    @Column(name = "state")
    private int state;

    public int getIdx() {
        return idx;
    }

    public void setIdx(int idx) {
        this.idx = idx;
    }

    public Integer getParentIdx() {
        return parentIdx;
    }

    public void setParentIdx(Integer parentIdx) {
        this.parentIdx = parentIdx;
    }

    public int getWriterIdx() {
        return writerIdx;
    }

    public void setWriterIdx(int writerIdx) {
        this.writerIdx = writerIdx;
    }

    public int getPostIdx() {
        return postIdx;
    }

    public void setPostIdx(int postIdx) {
        this.postIdx = postIdx;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ReplyEntity that = (ReplyEntity) o;
        return idx == that.idx && writerIdx == that.writerIdx && postIdx == that.postIdx && state == that.state && Objects.equals(parentIdx, that.parentIdx) && Objects.equals(content, that.content) && Objects.equals(insertDate, that.insertDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idx, parentIdx, writerIdx, postIdx, content, insertDate, state);
    }
}
