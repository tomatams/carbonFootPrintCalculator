package com.codecool.SpringcarbonFootprint.controller;

import com.codecool.SpringcarbonFootprint.model.NewQuestionDTO;
import com.codecool.SpringcarbonFootprint.model.Question;
import com.codecool.SpringcarbonFootprint.service.InvalidQuestionException;
import com.codecool.SpringcarbonFootprint.service.QuestionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @PostMapping(value = "/add")
    public ResponseEntity<Question> postQuestion (@RequestBody NewQuestionDTO newQuestionDTO) {
        try {
            return ResponseEntity.ok(questionService.addQuestion(newQuestionDTO));
        } catch (InvalidQuestionException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
