const AnswerForm = ({answer, setAnswer, pushAnswer}) => {

    const handleAnswer = () => {
        if(!answer) return;
        pushAnswer(answer);
        setAnswer("");
    }

    return (
        <tr>
            <td><input type ="text" onChange={e => setAnswer(e.target.value)} value = {answer}></input></td>
            <td><button type ="button" onClick={handleAnswer}>Add Answer</button></td>
        </tr>
    )
}

export default AnswerForm;
