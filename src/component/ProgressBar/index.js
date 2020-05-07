import React from 'react'

import styles from './index.module.scss'

const ProgressBar = ({
  currentQuestion,
  totalQuestions
}) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100
  return <div style={{ width: `${progressPercentage}%` }} className={styles.bar} />
}

export default ProgressBar
