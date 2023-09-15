package com.codecool.SpringcarbonFootprint.model;

import java.util.List;

public record NewQuestionDTO(String question, List<NewAnswerDTO> answerList, String topic, String hint, QuestionType type) {
}
