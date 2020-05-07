import React, { useState } from 'react'

import DifficultyLevel from './DifficultyLevel'
import Options from './Options'

import styles from './index.module.scss'

const getDecodedValue = value => decodeURIComponent(value)

const QuestionComponent = ({
  question,
  currentQuestion,
  totalQuestions,
  onNextQuestionClick,
  onCompleteClick,
  options = []
}) => {
  const [selectedOption, setSelectedOption] = useState('')

  const isAnswered = selectedOption !== ''
  const isCorrect = selectedOption === question.correct_answer

  const onNavigationClick = () => (currentQuestion === totalQuestions) ? onCompleteClick(isCorrect) : onNextQuestionClick(isCorrect)
  const navigationText = (currentQuestion === totalQuestions) ? 'Complete' : 'Next Question'

  return (
    <div className={styles.questionContainer}>
      {/* Title */}
      <div className={styles.questionCount}>
        Question {currentQuestion} of {totalQuestions}
      </div>
      {/* Category */}
      <div className={styles.questionCategory}>
        {getDecodedValue(question.category)}
      </div>
      {/* Difficulty Level */}
      <DifficultyLevel difficulty={question.difficulty} />
      <div className={styles.question}>
        {getDecodedValue(question.question)}
      </div>
      {/* Options */}
      <Options
        options={options}
        isAnswered={isAnswered}
        selectedOption={selectedOption}
        correctAnswer={question.correct_answer}
        setSelectedOption={setSelectedOption}
        getDecodedValue={getDecodedValue}
      />
      {/* Result */}
      {isAnswered && (
        <div className={styles.result}>
          {isCorrect ? 'Correct !' : 'Sorry !'}
        </div>
      )}
      {/* Navigation */}
      {isAnswered && (
        <div className={styles.navigationContainer}>
          <div onClick={onNavigationClick} className={styles.navigation}> {navigationText} </div>
        </div>
      )}
    </div>
  )
}

export default QuestionComponent
