import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchQuestionData from "../api/useFetchQuestion";
import QuestionsAndAnswers from "../Components/Admin/QA/QuestionsAndAnswers";
import "./AdminPage.css";

const AdminPage = () => {
    const [questionList, setQuestionList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            await FetchQuestionData()
            .then((json) => setQuestionList(json))
            .then(() => setIsLoading(false));
          }
          fetchData();
      });

      if(isLoading){
        return (
            <p>No questions yet or the questions are loading...</p>
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

export default AdminPage;
