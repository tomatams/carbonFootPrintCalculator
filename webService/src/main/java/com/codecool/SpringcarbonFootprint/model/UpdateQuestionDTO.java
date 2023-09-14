package com.codecool.SpringcarbonFootprint.model;

import java.util.List;
import java.util.UUID;

public record UpdateQuestionDTO(UUID id, String question, List<UpdateAnswerDTO> answerList) {
}
