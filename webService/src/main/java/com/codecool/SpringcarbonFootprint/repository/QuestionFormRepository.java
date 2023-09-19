package com.codecool.SpringcarbonFootprint.repository;

import com.codecool.SpringcarbonFootprint.model.QuestionForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface QuestionFormRepository extends JpaRepository<QuestionForm, UUID> {
}
