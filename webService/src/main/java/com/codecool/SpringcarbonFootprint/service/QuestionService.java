package com.codecool.SpringcarbonFootprint.service;

import com.codecool.SpringcarbonFootprint.model.Answer;
import com.codecool.SpringcarbonFootprint.model.NewAnswerDTO;
import com.codecool.SpringcarbonFootprint.model.NewQuestionDTO;
import com.codecool.SpringcarbonFootprint.model.Question;
import com.codecool.SpringcarbonFootprint.repository.AnswerRepository;
import com.codecool.SpringcarbonFootprint.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    @Autowired
    public QuestionService(QuestionRepository questionRepository, AnswerRepository answerRepository) {
        this.questionRepository = questionRepository;
        this.answerRepository = answerRepository;
    }

    public Question addQuestion(NewQuestionDTO newQuestionDTO) throws InvalidQuestionException {
        List<Answer> answerList = getAnswerList(newQuestionDTO);
        Question newQuestion = questionBuilder(newQuestionDTO, answerList);
        for (Answer answer : answerList) {
            answer.setQuestion(newQuestion);
        }
        questionRepository.saveAndFlush(newQuestion);
        return newQuestion;
    }

    private List<Answer> getAnswerList(NewQuestionDTO newQuestionDTO) {
        return newQuestionDTO.answerList()
                .stream()
                .map(this::answerBuilder)
                .toList();
    }

    private Answer answerBuilder(NewAnswerDTO newAnswerDTO){
        return Answer.builder()
                .answer(newAnswerDTO.answer())
                .build();
    }

    private Question questionBuilder (NewQuestionDTO newQuestionDTO, List<Answer> answerList) {
        return Question.builder()
                .id(UUID.randomUUID())
                .question(newQuestionDTO.question())
                .answerList(answerList)
                .build();
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }
}
