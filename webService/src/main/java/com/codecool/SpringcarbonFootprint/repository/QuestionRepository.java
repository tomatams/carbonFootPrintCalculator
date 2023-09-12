package com.codecool.SpringcarbonFootprint.repository;

import com.codecool.SpringcarbonFootprint.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface QuestionRepository extends JpaRepository<Question, UUID> {
}
