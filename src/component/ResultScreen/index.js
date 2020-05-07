import React from 'react'

import styles from './index.module.scss'

const ResultScreen = ({
  correctQuestionCount,
  totalQuestions
}) => {
  const score = (correctQuestionCount / totalQuestions) * 100

  return (
    <div className={styles.container}>
      <div> Challenge Completed </div>
      <div> Your score is: {score.toFixed(2)}% </div>
    </div>
  )
}

export default ResultScreen
