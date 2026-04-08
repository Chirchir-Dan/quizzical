import './App.css'
import  {useState} from 'react'
import Quiz from './components/Quiz'

export default function App() {  
    const [quizStarted, setQuizStarted] = useState(false)

    const startQuiz = () => {
        setQuizStarted(true)
    }

    return (
      <div className="App">
        {quizStarted ? 
          <>
            <Quiz /> 
          </>
          : (
            <>
              <h1>Quizzical</h1>
              <p>This is a simple quiz application.</p>
              <button onClick={() => startQuiz()} className='start-quiz-button'>Start quiz</button>
            </>
          )}
      </div>
    )
}
      