package com.codecool.SpringcarbonFootprint.controller;

import com.codecool.SpringcarbonFootprint.model.NewQuestionDTO;
import com.codecool.SpringcarbonFootprint.model.Question;
import com.codecool.SpringcarbonFootprint.model.UpdateQuestionDTO;
import com.codecool.SpringcarbonFootprint.service.InvalidQuestionException;
import com.codecool.SpringcarbonFootprint.service.NotFoundQuestionException;
import com.codecool.SpringcarbonFootprint.service.QuestionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@RestController
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionService questionService;
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }
    @GetMapping(value = "/all")
    public List<Question> getQuestions(){
        return questionService.getAllQuestions();
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Question> getRecipeByID(@PathVariable("id") UUID id) {
        try {
            return ResponseEntity.ok(questionService.getQuestionByID(id));
        } catch (NotFoundQuestionException e) {
            throw new RuntimeException(e);
        }
    }
    @PostMapping(value = "/add")
    public ResponseEntity<Question> postQuestion (@RequestBody NewQuestionDTO newQuestionDTO) {
        try {
            return ResponseEntity.ok(questionService.addQuestion(newQuestionDTO));
        } catch (InvalidQuestionException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Question> updateQuestion (@RequestBody UpdateQuestionDTO updateQuestionDTO){
        try {
            return ResponseEntity.ok(questionService.updateQuestion(updateQuestionDTO));
        } catch (NotFoundQuestionException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @DeleteMapping(value = "/delete/{id}")
    public void deleteRecipeByID(@PathVariable("id") UUID id) {
        questionService.deleteQuestionByID(id);
    }
}
