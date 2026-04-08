export default function Question(props) {
    return (
        <div className="question-container">
            <h3 className="question-text">{props.data.question}</h3>
            <div className="answers-container">
                {props.data.options.map(option => (
                    <button key={option.id} className="answer-btn">
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    )
}