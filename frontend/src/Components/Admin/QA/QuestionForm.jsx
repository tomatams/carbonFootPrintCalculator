const QuestionForm = () => {
    return (
        <form>
            <div className="control">
                <label htmlFor="name">Question:</label>
                <input
                    //defaultValue={question ? question.question : null}
                    name="name"
                    id="name"
                />
            </div>

            <div className="control">
                <label htmlFor="name">Answer:</label>
                <input
                    //defaultValue={question ? question.question : null}
                    name="answer"
                    id="answer"
                />
            </div>

        </form>
    )
}

export default QuestionForm;
