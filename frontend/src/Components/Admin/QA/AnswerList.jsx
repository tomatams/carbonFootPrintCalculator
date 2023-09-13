import { useState } from "react";
import AddedAnswer from "./AddedAnswer";
import AnswerForm from "./AnswerForm";

const AnswerList = () => {
    const [answers, setAnswers] = useState([]);
    const [oneAnswer, setOneAnswer] = useState("");

    function pushAnswer (answer) {
        const newAnswers = [...answers, {answer: answer}];
        setAnswers(newAnswers);
    }

    return (
        <div>
            <div>
                <label>AnswerList</label>
                <table>
                    <tbody>
                        {answers.map((answer, index) => (
                            <AddedAnswer
                                key={index}
                                index = {index}
                                answer = {answer}
                            />
                        ))}
                        <AnswerForm
                            pushAnswer = {pushAnswer}
                            answer = {oneAnswer}
                            setAnswer = {setOneAnswer}
                         />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AnswerList;
