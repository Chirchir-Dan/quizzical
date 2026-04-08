import {clsx} from 'clsx'

export default function Question(props) {
    return (
        <div className="question-container">
            <h3 className="question-text">{props.data.question}</h3>
            <div className="answers-container">
                {props.data.options.map(option => (
                    <button key={option.id}
                     onClick={() => props.toggle(option.id)}
                     className={clsx("answer-btn", option.isHeld && "held")}
                     >
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    )
}