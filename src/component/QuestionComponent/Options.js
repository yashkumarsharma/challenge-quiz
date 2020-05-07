import React from 'react'
import classnames from 'classnames'

import styles from './index.module.scss'

const Options = ({
  options,
  isAnswered,
  selectedOption,
  correctAnswer,
  setSelectedOption,
  getDecodedValue
}) => (
  <div className={styles.options}>
    {options.map((option, index) => (
      <div
        key={index}
        className={classnames(
          styles.option,
          { [styles.disabled]: isAnswered },
          { [styles['selected-option']]: selectedOption === option },
          { [styles['correct-option']]: isAnswered && option === correctAnswer }
        )}
        onClick={() => {
          if (!isAnswered) setSelectedOption(option)
        }}
      >
        {getDecodedValue(option)}
      </div>
    ))}
  </div>
)

export default Options
