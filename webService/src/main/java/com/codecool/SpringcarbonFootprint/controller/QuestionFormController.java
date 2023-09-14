package com.codecool.SpringcarbonFootprint.controller;

import com.codecool.SpringcarbonFootprint.service.QuestionFormService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/questionForms")
public class QuestionFormController {

    private QuestionFormService questionFormService;

    public QuestionFormController(QuestionFormService questionFormService) {
        this.questionFormService = questionFormService;
    }

}
