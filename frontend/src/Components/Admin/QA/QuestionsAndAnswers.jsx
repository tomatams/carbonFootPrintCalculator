import { useNavigate } from "react-router-dom";
import "./QuestionsAndAnswers.css";

const QuestionsAndAnswers = ({questionData}) => {
    const navigate = useNavigate();

    function onDelete (id) {
      deleteQuestion(id)
      .then(() => {
        navigate("/admin")
      })
      .catch((error) => {
        console.log(error);
      });

    }

    return (
        <div className="qna-table">
          {questionData.map((qa) => (
            <div key={qa.id} className="qna-elem">
              <div className="qna-cell-question">{qa.question}</div>
              <div className="qna-cell-answers">
                <ul>
                  {qa.answerList.map((answer) => (
                    <li className="qna-cell-answer" key={answer.id}>{answer.answer}</li>
                  ))}
                </ul>
              </div>
              <div>
                {/* //TO DO update questions --- <button className="qna-cell-buttons" >Update</button> */}
                <button onClick={() => onDelete(qa.id)} className="qna-cell-buttons" >Delete</button>
              </div>
            </div>
          ))}
        </div>
      );
    };

  const deleteQuestion = (id) => {
    return fetch(`/questions/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

export default QuestionsAndAnswers;
