package com.codecool.SpringcarbonFootprint.service;

import com.codecool.SpringcarbonFootprint.model.Answer;
import com.codecool.SpringcarbonFootprint.model.NewQuestionFormDTO;
import com.codecool.SpringcarbonFootprint.model.Question;
import com.codecool.SpringcarbonFootprint.model.QuestionForm;
import com.codecool.SpringcarbonFootprint.repository.AnswerRepository;
import com.codecool.SpringcarbonFootprint.repository.QuestionFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Service
public class QuestionFormService {

    private final QuestionFormRepository questionFormRepository;
    private final QuestionService questionService;
    private final AnswerRepository answerRepository;
    @Autowired
    public QuestionFormService(QuestionFormRepository questionFormRepository, QuestionService questionService, AnswerRepository answerRepository) {
        this.questionFormRepository = questionFormRepository;
        this.questionService = questionService;
        this.answerRepository = answerRepository;
    }

    public QuestionForm addQuestionForm(List<NewQuestionFormDTO> newQuestionFormDTO) throws InvalidQuestionException, NotFoundQuestionException {
        QuestionForm questionForm = questionFormBuilder(newQuestionFormDTO);
        questionFormRepository.save(questionForm);
        return questionForm;
    }

    private QuestionForm questionFormBuilder(List<NewQuestionFormDTO> newQuestionFormDTO) throws NotFoundQuestionException {
        Set<Question> completedQuestionSet = getQuestionSet(newQuestionFormDTO);
        Set<Answer> chosenAnswers = getAnswerSet(newQuestionFormDTO);

        return QuestionForm.builder()
                .id(UUID.randomUUID())
                .dateOfCompletion(LocalDate.now())
                .questionSet(completedQuestionSet)
                .answerSet(chosenAnswers)
                .build();
    }

    private Set<Answer> getAnswerSet(List<NewQuestionFormDTO> newQuestionFormDTO) throws NotFoundQuestionException {
        Set<Answer> chosenAnswers = new HashSet<>();
        for (NewQuestionFormDTO questionFormDTO : newQuestionFormDTO) {
            Answer chosenAnswer = getAnswerByID(questionFormDTO.answer_id());
            chosenAnswers.add(chosenAnswer);
        }
        return chosenAnswers;
    }

    private Set<Question> getQuestionSet(List<NewQuestionFormDTO> newQuestionFormDTO) throws NotFoundQuestionException {
        Set<Question> completedQuestionSet = new HashSet<>();

        for (NewQuestionFormDTO questionFormDTO : newQuestionFormDTO) {
            Question completedQuestion = questionService.getQuestionByID(questionFormDTO.question_id());
            completedQuestionSet.add(completedQuestion);
        }
        return completedQuestionSet;
    }

    public Answer getAnswerByID(Long id) throws NotFoundQuestionException {
        return answerRepository.getAnswerById(id);
    }
}
