import {clsx} from 'clsx'

export default function Question(props) {
    return (
        <div className="question-container">
            <h3 className="question-text">{props.data.question}</h3>
            <div className="answers-container">
                {props.data.options.map(option => {
                    let backgroundColor = "transparent"
                    let opacity = 1
                    if (props.showResults) {
                        if (option.text === props.data.correctAnswer) {
                            backgroundColor = "#94D7A2"
                            opacity = 1
                        } else if (option.isHeld && option.text !== props.data.correctAnswer) {
                            backgroundColor = "#F8BCBC"
                            opacity = 0.5
                        } else {
                            opacity = 0.5
                        }
                    } else if (option.isHeld) {
                        // standard color for selected option before checking answers
                        backgroundColor = "#D6DBF5"
                    }
                    const styles = {
                        backgroundColor: backgroundColor,
                        opacity: opacity,
                        border: backgroundColor !== "transparent" ? "none" : "1px solid #4D5B9E"
                    }

                    return (
                        <button key={option.id}
                        style={styles}
                        onClick={() => !props.showResults && props.toggle(option.id)}
                        className={clsx("answer-btn", option.isHeld && "held")}
                        >
                            {option.text}
                        </button>
                        )
                })}
            </div>
        </div>
    )
}