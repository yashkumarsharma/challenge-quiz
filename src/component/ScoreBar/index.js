import React from 'react'

import styles from './index.module.scss'

const ScoreBar = ({
  currentQuestion,
  correctQuestionCount,
  totalQuestions
}) => {
  const score = currentQuestion === 1 ? 0 : (correctQuestionCount / (currentQuestion - 1)) * 100
  const lowestPossibleScore = (correctQuestionCount / totalQuestions) * 100
  const remainingQuestionCount = totalQuestions - (currentQuestion - 1)
  const maxScore = ((correctQuestionCount + remainingQuestionCount) / totalQuestions) * 100

  return (
    <div className={styles.container}>
      <div className={styles.score}>
        <span> Score: {score.toFixed(2)}% </span>
        <span> Max Score: {maxScore.toFixed(2)}% </span>
      </div>
      <div className={styles.scoreBars}>
        <div className={`${styles.bar} ${styles.maxScoreBar}`} style={{ width: `${maxScore}%` }} />
        {score > 0 && <div
          className={`${styles.bar} ${styles.scoreBar}`}
          style={{ width: `${score}%` }}
        />
        }
        {lowestPossibleScore > 0 && <div
          className={`${styles.bar} ${styles.lowestPossibleScoreBar}`}
          style={{ width: `${lowestPossibleScore}%` }}
        />
        }
      </div>
    </div>
  )
}

export default ScoreBar
