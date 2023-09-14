import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backendRoutes from "../api/backendRoutes";
import FetchQuestionData from "../api/useFetchQuestion";
import QuestionsAndAnswers from "../Components/Admin/QA/QuestionsAndAnswers";
import "./AdminPage.css";

const AdminPage = () => {
    const [questionList, setQuestionList] = useState(null);

    useEffect(() => {
        async function fetchData() {
            await FetchQuestionData()
                .then((json) => setQuestionList(json));;
          }
          fetchData();
      });

      function isLoaded(){
        return questionList === null || questionList.length === 0;
      }

        return (
            <div>
                <Link to="/QuestionForm">
                    <button className="admin-newQ-button">Add a new Question</button>
                </Link>

                { isLoaded? <p>No questions yet or the questions are loading...</p> : <QuestionsAndAnswers questionData={questionList}/>}

            </div>
        )
}

export default AdminPage;
