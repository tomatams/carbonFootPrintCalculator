import "./QuestionsAndAnswers.css";

const QuestionsAndAnswers = ({questionData}) => {
    return (
        <div className="qna-table">
          {questionData.map((qa) => (
            <div key={qa.id} className="qna-row">
              <div className="qna-cell question">{qa.question}</div>
              <div className="qna-cell answers">
                <ul>
                  {qa.answerList.map((answer) => (
                    <li key={answer.id}>{answer.answer}</li>
                  ))}
                </ul>
              </div>
              <div className="qna-cell modification">
                <button>Update</button>
                <button>Delete</button>
              </div>
            </div>
          ))}
        </div>
      );
    };

export default QuestionsAndAnswers;
