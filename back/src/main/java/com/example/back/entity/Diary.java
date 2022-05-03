package com.example.back.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "diary")
@RequiredArgsConstructor
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
public class Diary {
    @Id
    @NotNull
    @GeneratedValue
    private Long dno;

//    @NotNull
//    private String userId;

    @NotNull
    private String word;

    private String image;

    private String content;

    @CreatedDate
    private LocalDateTime createdat;

    private int view;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId")
    @JsonIgnore
    User user;

    @Builder
    public Diary (Long dno, String word, String image, String content, LocalDateTime createdat, User user, int view){
        this.dno = dno;
        this.word = word;
        this.image = image;
        this.content = content;
        this.createdat = createdat;
        this.user = user;
        this.view = view;
    }
}
