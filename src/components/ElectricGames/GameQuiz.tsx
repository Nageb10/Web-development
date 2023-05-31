import { useState } from "react";
import "../../css/gameQuiz.css";
const GameQuiz = () => {

    const [result, setResult] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const quizList = [
        {
            question: "Which button is to pass in FIFA?",
            answers: [
                {id: 0, text: "Square button", correct: false},
                {id: 1, text: "X button", correct: true},
                {id: 2, text: "Triangle button", correct: false},
                {id: 3, text: "Circle button", correct: false},

            ]
        },
        {
            question: "What is the age limit for Call of Duty",
            answers: [
                {id: 0, text: "18", correct: true},
                {id: 1, text: "12", correct: false},
                {id: 2, text: "8", correct: false},
                {id: 3, text: "22", correct: false},

            ]
        },
        {
            question: "Which fictional city is Skate 3 based in",
            answers: [
                {id: 0, text: "San Andreas", correct: false},
                {id: 1, text: "Narnia", correct: false},
                {id: 2, text: "The Grand Line", correct: false},
                {id: 3, text: "Port Carverton", correct: true},

            ]
        },
        {
            question: "What year did God Of War release?",
            answers: [
                {id: 0, text: "2009", correct: false},
                {id: 1, text: "2000", correct: false},
                {id: 2, text: "1999", correct: false},
                {id: 3, text: "2005", correct: true},

            ]
        },
        {
            question: "Which FIFA released Ultimate team",
            answers: [
                {id: 0, text: "FIFA 12", correct: false},
                {id: 1, text: "FIFA 15", correct: false},
                {id: 2, text: "FIFA 09", correct: true},
                {id: 3, text: "FIFA 11", correct: false},

            ]
        },
    ]

    const answered = (correct: boolean) => {
      if(correct){
        setScore(score + 1)
      }

      if(currentQuestion + 1 < quizList.length){
        setCurrentQuestion(currentQuestion +1)
      }else {
        setResult(true)
      }
    }

    const restartQuiz = () => {
      setScore(0);
      setCurrentQuestion(0);
      setResult(false);
    }
  return (
    <section className="quiz-output">
      <h2 className="page-title">Game Quiz</h2>

      <h3 className="score-txt">Current Score: {score}</h3>

      {result ? (
      <div className="results">
        <h3>Results</h3>
        <h4>{score} out of {quizList.length} correct - ({(score/quizList.length) * 100}%)</h4>
        <button onClick={() => restartQuiz()} className="restart-btn">Restart Game</button>
      </div>

      ) : (<div className="question-card">
        <h4>Question {currentQuestion + 1} out of {quizList.length}</h4>
        <h5 className="question-text">{quizList[currentQuestion].question}</h5>

        <ul>
           {quizList[currentQuestion].answers.map((question) => {
            return(
              <li onClick={() => answered(question.correct)} key={question.id}>{question.text}</li>
            )
           })}
        </ul>
      </div>) }

    </section>
  );
};

export default GameQuiz;
