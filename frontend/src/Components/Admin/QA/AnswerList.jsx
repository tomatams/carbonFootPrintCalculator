import { useEffect, useState } from "react";
import AddedAnswer from "./AddedAnswer";
import AnswerForm from "./AnswerForm";

const AnswerList = ({addAnswers}) => {
    const [answers, setAnswers] = useState([]);
    const [oneAnswer, setOneAnswer] = useState("");

    function pushAnswer (answer) {
        const newAnswers = [...answers, {answer: answer}];
        setAnswers(newAnswers);
    }

    useEffect(() => {
        addAnswers(answers);
    }, [answers, addAnswers])

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
