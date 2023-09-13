import "./QuestionsAndAnswers.css";

const QuestionsAndAnswers = ({questionData}) => {
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
                <button className="qna-cell-buttons" >Update</button>
                <button className="qna-cell-buttons" >Delete</button>
              </div>
            </div>
          ))}
        </div>
      );
    };

export default QuestionsAndAnswers;
