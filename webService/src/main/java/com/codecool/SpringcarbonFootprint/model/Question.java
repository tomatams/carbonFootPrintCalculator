package com.codecool.SpringcarbonFootprint.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.*;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Question {

    @Id
    private UUID ID;

    private String question;

    @OneToMany
    private List<Answer> answerList;

}
