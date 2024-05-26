package org.example.chaos_dice_project.entity;


import jakarta.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;
@Entity
@Table(name = "store", schema = "chaos_dice_project", catalog = "")
public class StoreEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "idx")
    private int idx;
    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column(name = "location")
    private int location;
    @Basic
    @Column(name = "map")
    private int map;

    public int getIdx() {
        return idx;
    }

    public void setIdx(int idx) {
        this.idx = idx;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getLocation() {
        return location;
    }

    public void setLocation(int location) {
        this.location = location;
    }

    public int getMap() {
        return map;
    }

    public void setMap(int map) {
        this.map = map;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StoreEntity that = (StoreEntity) o;
        return idx == that.idx && location == that.location && map == that.map && Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idx, name, location, map);
    }
}
