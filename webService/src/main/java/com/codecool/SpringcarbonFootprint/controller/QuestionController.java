package com.codecool.SpringcarbonFootprint.controller;

import com.codecool.SpringcarbonFootprint.model.NewQuestionDTO;
import com.codecool.SpringcarbonFootprint.model.Question;
import com.codecool.SpringcarbonFootprint.model.UpdateQuestionDTO;
import com.codecool.SpringcarbonFootprint.service.InvalidQuestionException;
import com.codecool.SpringcarbonFootprint.service.NotFoundQuestionException;
import com.codecool.SpringcarbonFootprint.service.QuestionService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionService questionService;
    private final ObjectMapper objectMapper;

    public QuestionController(QuestionService questionService, ObjectMapper objectMapper) {
        this.questionService = questionService;
        this.objectMapper =objectMapper;
        //addQuestionsFromJson();
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

    public List<Question> addQuestionsFromJson() {
        try {
            InputStream inputStream = new ClassPathResource("starterQuestions.json").getInputStream();
            List<NewQuestionDTO> questions = objectMapper.readValue(inputStream, new TypeReference<List<NewQuestionDTO>>() {});
            List<Question> addedQuestions = questionService.addQuestions(questions);
            return ResponseEntity.ok(addedQuestions).getBody();
        } catch (InvalidQuestionException | IOException e) {
            throw new RuntimeException(e);
        }
    }
}
