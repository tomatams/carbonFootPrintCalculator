import { useState } from "react";
import Answer from "./Answer";
import Question from "./Question";
import "./FootprintForm.css";

const FootprintForm = ({questionList}) => {
    const [questionNum, setQuestionNum] = useState(0);
    const [givenAnswers, setGivenAnswers] = useState([]);

    function handleSubmitAnswer(){
        if(questionNum >= 0 && questionNum < questionList.length - 1){
            setQuestionNum(questionNum + 1);
        }
    }

    function handleAnswerClick(question_id, answer_id){
        if(questionNum >= 0 && questionNum < questionList.length - 1){
            setQuestionNum(questionNum + 1);
        }
        const chosenAnswers = [...givenAnswers, {question_id: question_id, answer_id: answer_id}];
        setGivenAnswers(chosenAnswers);
        console.log(chosenAnswers)
    }

    return (
        <div>
                <p>Fill out the Carbon Footprint Form!</p>

                <Question question={questionList[questionNum].question}></Question>
                <div className="fpf-container-answer">
                    {questionList[questionNum].answerList.map((answer)=>(
                        <Answer  
                        key = {answer.id} 
                        index = {answer.id} 
                        answer= {answer}
                        onChose={answer_id =>handleAnswerClick(questionList[questionNum].id, answer_id)}
                        ></Answer>
                    ))}
                </div>

                <div>
                  <div className = "moveButton">
                    {questionNum > 0 && <button onClick={() => setQuestionNum(questionNum - 1)}>Previous</button>}
                    {questionNum < questionList.length-1 && <button onClick={() => setQuestionNum(questionNum + 1)}>Next</button>}
                  </div>
                  <div className = "submitButton">
                    {questionNum === questionList.length-1 && <button onClick={handleSubmitAnswer} type ="button">Submit the form about Carbon Footprint</button>}
                  </div>
                </div>
            </div>
    )
}

export default FootprintForm;
