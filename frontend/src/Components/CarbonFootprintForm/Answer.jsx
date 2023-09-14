const Answer = ({answer, onChose}) => {

    return (
        <div className="fpf-answer-button">
            <button  onClick={()=>onChose(answer.id)}>{answer.answer}</button>
        </div>
    )
}

export default Answer;
