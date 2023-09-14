import { useState } from "react";
import Answer from "./Answer";
import Question from "./Question";

const FootprintForm = ({questionList}) => {
    const [questionNum, setQuestionNum] = useState(0);

    return (
        <div>
                <p>Fill out the Carbon Footprint Form!</p>

                <Question question={questionList[questionNum].question}></Question>

                {questionList[questionNum].answerList.map((answer)=>(
                    <Answer key = {answer.id} index = {answer.id} answer= {answer.answer}></Answer>
                ))}

                <div>
                    {questionNum > 0 && <button onClick={() => setQuestionNum(questionNum - 1)}>Previous</button>}
                    {questionNum < questionList.length-1 && <button onClick={() => setQuestionNum(questionNum + 1)}>Next</button>}
                </div>

            </div>
    )
}

export default FootprintForm;
