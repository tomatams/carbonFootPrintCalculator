import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backendRoutes from "../../../api/backendRoutes";
import AnswerList from "./AnswerList";
import "./QuestionForm.css";


const QuestionForm = () => {
    const navigate = useNavigate();
    const [answerList, setAnswerList] = useState([]);
    const [loading, setLoading] = useState(false);
    const topics = ["food", "travel", "home"];
    const questionsTypes = ["simple", "more"];
    const [error, setError] = useState("");

    function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const entries = [...formData.entries()];

        let question = entries.reduce((acc, entry) => {
            const [k, v] = entry;
            acc[k] = v;
            return acc;
          }, {});

        question.answerList = answerList;

        if(answerList.length < 1){
            setError("No enough answers, add at least one!");
        } else if (!question.question.includes("?") || question.question === ""){
            setError("You have not written a question, use question mark too!");
        } else {
            onSave(question);
        }

    }

    async function onSave (question){
        console.log(question);
        setLoading(true);
        await addQuestion(question)
        .then(() => {
            navigate("/admin");
        })
        .catch((err) => {
          throw (err);
        })
        .finally(() => {
          setLoading(false);
        })
    }

    return (
        <form onSubmit = {e => onSubmit(e)}>
            <div className="questionForm">
                <div className="control">
                    <label htmlFor="Question">Question:</label>
                    <input
                        name="question"
                        id="question"
                    />
                </div>
                <div className="control">
                <label htmlFor="topic">Topic:</label>
                <select>
                        <option></option>
                    {topics.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                    </select>
                </div>

                <div className="control">
                <label htmlFor="hint">Hint:</label>
                    <input
                            name="hint"
                            id="hint"
                        />
                </div>

                <div className="control">
                <label htmlFor="questionType">Question type:</label>
                    <select>
                        <option></option>
                    {questionsTypes.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                    </select>
                </div>
                <AnswerList id = "answerList" name ="answerList" addAnswers={setAnswerList}/>
                    <div>
                        <p>{error}</p>
                    </div>
            </div>


            <div >
                <button type="submit" >Create Question</button>
                <button onClick={() => navigate("/")}>Cancel</button>
            </div>

        </form>
    )
}


const addQuestion = async (question) => {
    const res = await fetch(backendRoutes.postOneQuestion, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(question)
    });
    return await res.json();
};


export default QuestionForm;
