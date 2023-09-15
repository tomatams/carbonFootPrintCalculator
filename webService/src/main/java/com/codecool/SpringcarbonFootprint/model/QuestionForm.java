package com.codecool.SpringcarbonFootprint.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Set;
import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name ="QuestionForms")
public class QuestionForm {

    @Id
    private UUID id;

    private LocalDate dateOfCompletion;

    @ManyToMany
    @JsonManagedReference
    @JoinTable(name = "Questions_QuestionForm",
            joinColumns = @JoinColumn(name = "questionForm_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "question_id", referencedColumnName = "id"))
    private Set<Question> questionSet;

    @ManyToMany
    @JsonManagedReference
    @JoinTable(name = "Answers_QuestionForm",
            joinColumns = @JoinColumn(name = "questionForm_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "answer_id", referencedColumnName = "id"))
    private Set<Answer> answerSet;
}
