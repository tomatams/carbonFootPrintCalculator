import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuestionsAndAnswers from "../Components/Admin/QA/QuestionsAndAnswers";
import "./AdminPage.css";

const AdminPage = () => {
    const [questionList, setQuestionList] = useState(null);

    useEffect(() => {
        async function fetchData() {
            await fetchQuestionData()
                .then((json) => setQuestionList(json));;
          }
          fetchData();
      });

    if(questionList === null){
        return (
            <div>Loading...</div>
        )
    } else {   
        return (
            <div>
                <Link to="/QuestionForm">
                    <button className="admin-newQ-button">Add a new Question</button>
                </Link>
                <QuestionsAndAnswers questionData={questionList}/>
            </div>
        )
    }
}

async function fetchQuestionData() {
    const url = "/questions/all";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Fetch failed with status ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export default AdminPage;
