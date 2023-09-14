package com.codecool.SpringcarbonFootprint.service;

import com.codecool.SpringcarbonFootprint.model.*;
import com.codecool.SpringcarbonFootprint.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    @Autowired
    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question addQuestion(NewQuestionDTO newQuestionDTO) throws InvalidQuestionException {
        List<Answer> answerList = getAnswerListForAddNewQuestion(newQuestionDTO);
        Question newQuestion = questionBuilder(newQuestionDTO, answerList);
        addQuestionToAnswers(answerList, newQuestion);
        questionRepository.saveAndFlush(newQuestion);
        return newQuestion;
    }

    private static void addQuestionToAnswers(List<Answer> answerList, Question newQuestion) {
        for (Answer answer : answerList) {
            answer.setQuestion(newQuestion);
        }
    }

    private List<Answer> getAnswerListForAddNewQuestion(NewQuestionDTO newQuestionDTO) {
        return newQuestionDTO.answerList()
                .stream()
                .map(this::answerBuilderForAddNewAnswer)
                .toList();
    }
    private Answer answerBuilderForAddNewAnswer(NewAnswerDTO newAnswerDTO){
        return Answer.builder()
                .answer(newAnswerDTO.answer())
                .build();
    }

    private Question questionBuilder (NewQuestionDTO newQuestionDTO, List<Answer> answerList) {
        return Question.builder()
                .id(UUID.randomUUID())
                .question(newQuestionDTO.question())
                .answerList(answerList)
                .hint(newQuestionDTO.hint())
                .topic(newQuestionDTO.topic())
                .questionType(newQuestionDTO.type())
                .build();
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    public Question getQuestionByID(UUID id) throws NotFoundQuestionException {
        return questionRepository.getQuestionsById(id);
    }

    public void deleteQuestionByID(UUID id) {
        questionRepository.deleteById(id);
    }

    public Question updateQuestion(UpdateQuestionDTO updateQuestionDTO) throws NotFoundQuestionException {
        Question oldQuestion = getQuestionByID(updateQuestionDTO.id());
        oldQuestion.setQuestion(updateQuestionDTO.question());
        questionRepository.save(oldQuestion);
        //TODO update answerList
        return oldQuestion;
    }
}
