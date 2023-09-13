import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuestionsAndAnswers from "../Components/Admin/QA/QuestionsAndAnswers";
import SimpleButton from "../Components/Buttons/SimpleButton";

const AdminPage = () => {
    const [questionList, setQuestionList] = useState(null);

    useEffect(() => {
        const url = "/questions/all";
        fetch(url)
          .then((res) => res.json())
          .then((json) => setQuestionList(json));
      });

    if(questionList === null){
        return (
            <div>Loading...</div>
        )
    } else {   
        return (
            <div>
                <Link to="/QuestionForm">
                    <SimpleButton buttonTitle = {"Add a new Question"}/>
                </Link>
                <QuestionsAndAnswers questionData={questionList}/>
            </div>
        )
    }
}

export default AdminPage;
