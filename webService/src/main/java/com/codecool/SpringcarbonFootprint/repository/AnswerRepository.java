package com.codecool.SpringcarbonFootprint.repository;

import com.codecool.SpringcarbonFootprint.model.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {

    public Answer getAnswerById(Long id);
}
