import React, { useState } from 'react'

import ProgressBar from '../ProgressBar'
import QuestionComponent from '../QuestionComponent'
import ResultScreen from '../ResultScreen'
import ScoreBar from '../ScoreBar'

import styles from './index.module.scss'

const QuizScreen = ({ questions }) => {
  const [currentQuestion, setQuestion] = useState(1)
  const [correctQuestionCount, setCorrectQuestionCount] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)

  const totalQuestions = questions.length
  // const renderTitle = () => <div> Question {currentQuestion} of {questionCount} </div>

  const onNextQuestionClick = isCorrect => {
    if (isCorrect) setCorrectQuestionCount(prevValue => prevValue + 1)
    setQuestion(prevValue => prevValue + 1)
  }

  const onCompleteClick = isCorrect => {
    if (isCorrect) setCorrectQuestionCount(prevValue => prevValue + 1)
    setIsCompleted(true)
  }

  // In order to shuffle the correct answer, this logic was placed here
  const getOptions = question => {
    const options = [...question.incorrect_answers]
    options.splice(Math.floor(Math.random() * options.length), 0, question.correct_answer)
    return options
  }

  return (
    <div className={styles.appContainer}>
      {isCompleted && <ResultScreen totalQuestions={totalQuestions} correctQuestionCount={correctQuestionCount} /> }
      {!isCompleted &&
        <>
          <ProgressBar currentQuestion={currentQuestion} totalQuestions={totalQuestions} />
          <div className={styles.quizContainer}>
            <QuestionComponent
              key={currentQuestion}
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
              onNextQuestionClick={onNextQuestionClick}
              question={questions[currentQuestion - 1]}
              onCompleteClick={onCompleteClick}
              options={getOptions(questions[currentQuestion - 1])}
            />
            <ScoreBar
              currentQuestion={currentQuestion}
              correctQuestionCount={correctQuestionCount}
              totalQuestions={totalQuestions}
            />
          </div>
        </>
      }
    </div>
  )
}

export default QuizScreen
