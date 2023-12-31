package com.codecool.SpringcarbonFootprint.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name ="Questions")
public class Question {

    @Id
    private UUID id;

    private String question;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Answer> answerList;

    private String topic;
    private String hint;

    @Enumerated(EnumType.STRING)
    private QuestionType questionType;

    @ManyToMany(mappedBy = "questionSet")
    @JsonBackReference
    private Set<QuestionForm> questionFormSet;
}
