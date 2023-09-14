const Answer = ({answer, onChose}) => {

    return (
        <div >
            <button className="fpf-answer-button"onClick={()=>onChose(answer.id)}>{answer.answer}</button>
        </div>
    )
}

export default Answer;
