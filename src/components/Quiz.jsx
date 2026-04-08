import {useState, useEffect} from 'react'
import he from 'he'
import Question from './Question'

export default function Quiz() {
    const [questions, setQuestions] = useState([])
    const [showResults, setShowResults] = useState(false)

    function checkAnswers() {
        setShowResults(true)
    }

    const correctAnswersCount = questions.filter(question => {
        return question.options.some(option => option.isHeld && option.text === question.correctAnswer)
    }).length

    function holdAnswer(questionId, optionId) {
    setQuestions(prevQuestions => prevQuestions.map(question => {
        if (question.id !== questionId) {
            return question
        }
        
        const newOptions = question.options.map(option => {
            return option.id === optionId 
                ? {...option, isHeld: !option.isHeld} 
                : {...option, isHeld: false}
        })
        
        return {...question, options: newOptions}
    }))
}
    
    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5')
            .then(res => res.json())
            .then(data => {
                const formattedQuestions = data.results.map(question => {
                    const allOptions = [...question.incorrect_answers, question.correct_answer]
                    const shuffledOptions = allOptions.sort(() => Math.random() - 0.5)
                    return {
                        id: crypto.randomUUID(),
                        question: he.decode(question.question),
                        correctAnswer: he.decode(question.correct_answer),
                        options: shuffledOptions.map(option => ({
                            id: crypto.randomUUID(),
                            text: he.decode(option),
                            isHeld: false
                        })),
                        selectedAnswer: ""
                    }
                })
                setQuestions(formattedQuestions)
            })
    }, [])
    return (
        <section className="quiz-container">
            {questions.length > 0 ? (
                <>
                    {questions.map(question => (
                        <Question
                            key={question.id}
                            data={question} 
                            toggle={(optionId) => holdAnswer(question.id, optionId)}
                            showResults={showResults}
                        />
                    ))}
                    <div className='quiz-footer'>
                        {showResults? (
                                <div className='result'>
                                    <span>You scored {correctAnswersCount}/{questions.length} correct answers</span>
                                    <button
                                        onClick={() => window.location.reload()}
                                        className='play-again-btn'
                                    >
                                        Play again
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={checkAnswers}
                                    className='check-answers-btn'
                                >
                                    Check answers
                                </button>
                            )
                        }
                    </div>
                </>
            ) : (
                <p>Loading quiz...</p>
            )}
        </section>
    )
}

