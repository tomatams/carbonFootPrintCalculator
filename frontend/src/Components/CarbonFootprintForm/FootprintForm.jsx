import { useState } from "react";
import Answer from "./Answer";
import Question from "./Question";
import "./FootprintForm.css";

const FootprintForm = ({questionList, onSubmit}) => {
    const [questionNum, setQuestionNum] = useState(0);
    const [givenAnswers, setGivenAnswers] = useState([]);

    function handleSubmitAnswer(){
        if(questionNum >= 0 && questionNum < questionList.length - 1){
            setQuestionNum(questionNum + 1);
        }
        onSubmit(givenAnswers);
    }

    function handleAnswerClick(question_id, answer_id){
        if(questionNum >= 0 && questionNum < questionList.length - 1){
            setQuestionNum(questionNum + 1);
        }
        handleAnswersToSameQuestion(givenAnswers, question_id, answer_id);
    }

    return (
        <div>
                <p>Fill out the Carbon Footprint Form!</p>
                <div>
                    <p>There is {questionList.length} questions to answer! You answered {questionNum + 1}</p>
                </div>

                <Question question={questionList[questionNum].question}></Question>
                <div className="fpf-container-answer">
                    {questionList[questionNum].answerList.map((answer)=>(
                        <Answer  
                        key = {answer.id} 
                        index = {answer.id} 
                        answer= {answer}
                        onChose={answer_id => handleAnswerClick(questionList[questionNum].id, answer_id)}
                        ></Answer>
                    ))}
                </div>

                <div>
                  <div className = "fpf-move-button">
                    {questionNum > 0 && <button onClick={() => setQuestionNum(questionNum - 1)}>Previous</button>}
                    {questionNum < questionList.length-1 && <button onClick={() => setQuestionNum(questionNum + 1)}>Next</button>}
                  </div>
                  <div className = "fpf-submit-button">
                    {questionNum === questionList.length-1 && <button onClick={handleSubmitAnswer} >Submit the form about Carbon Footprint</button>}
                  </div>
                </div>

            </div>
    )

    function handleAnswersToSameQuestion(givenAnswers, question_id, answer_id) {
        const includesQuestionId = givenAnswers.some(obj => obj.question_id === question_id);
        let chosenAnswers = [...givenAnswers];

        if (!includesQuestionId) {
            chosenAnswers = [...givenAnswers, { question_id: question_id, answer_id: answer_id }];
            setGivenAnswers(chosenAnswers);
        } else {
            let filteredAnswers = chosenAnswers.filter(givenAnswers => givenAnswers.question_id !== question_id);
            chosenAnswers = [...filteredAnswers, { question_id: question_id, answer_id: answer_id }];
            setGivenAnswers(chosenAnswers);
        }
        return chosenAnswers;
    }
}

export default FootprintForm;
