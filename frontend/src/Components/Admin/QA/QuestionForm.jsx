import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnswerList from "./AnswerList";

const QuestionForm = () => {
    const navigate = useNavigate();
    const [answerList, setAnswerList] = useState([]);
    const [loading, setLoading] = useState(false);

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
        console.log(question)
        onSave(question);
    }

    async function onSave (question){
        setLoading(true);
        await addQuestion(question)
        .then(() => {
            navigate("/");
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

            <div className="control">
                <label htmlFor="Question">Question:</label>
                <input
                    name="question"
                    id="question"
                />
            </div>

            <AnswerList id = "answerList" name ="answerList" addAnswers={setAnswerList}/>
            
            <div >
                <button type="submit" >Create recipe</button>
                <button onClick={() => navigate("/")}>Cancel</button>
            </div>
        </form>
    )
}


const addQuestion = async (question) => {
    const res = await fetch("/questions/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(question)
    });
    return await res.json();
};


export default QuestionForm;
