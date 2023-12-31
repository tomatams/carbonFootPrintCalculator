package com.codecool.SpringcarbonFootprint.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Answers")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String answer;

    @ManyToOne
    @JoinColumn(name = "question_id")
    @JsonBackReference
    private Question question;

    @ManyToMany(mappedBy = "answerSet", cascade = CascadeType.ALL)
    @JsonBackReference
    private Set<QuestionForm> questionFormSet;

}
