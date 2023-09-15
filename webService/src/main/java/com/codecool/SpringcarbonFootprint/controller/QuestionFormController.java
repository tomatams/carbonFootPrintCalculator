package com.codecool.SpringcarbonFootprint.controller;

import com.codecool.SpringcarbonFootprint.model.NewQuestionDTO;
import com.codecool.SpringcarbonFootprint.model.NewQuestionFormDTO;
import com.codecool.SpringcarbonFootprint.model.Question;
import com.codecool.SpringcarbonFootprint.model.QuestionForm;
import com.codecool.SpringcarbonFootprint.service.InvalidQuestionException;
import com.codecool.SpringcarbonFootprint.service.QuestionFormService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/questionForms")
public class QuestionFormController {

    private final QuestionFormService questionFormService;

    public QuestionFormController(QuestionFormService questionFormService) {
        this.questionFormService = questionFormService;
    }
    @PostMapping(value = "/add")
    public ResponseEntity<QuestionForm> postQuestionForm (@RequestBody List<NewQuestionFormDTO> newQuestionFormDTOs) {
        try {
            return ResponseEntity.ok(questionFormService.addQuestionForm(newQuestionFormDTOs));
        } catch (InvalidQuestionException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
