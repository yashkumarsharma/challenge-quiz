import React from 'react'

const DifficultyLevel = ({ difficulty }) => {
  switch (difficulty) {
    case 'easy': return <div> &#9733; &#9734; &#9734; </div>
    case 'medium': return <div> &#9733; &#9733; &#9734; </div>
    case 'hard': return <div> &#9733; &#9733; &#9733; </div>
    default: return null
  }
}

export default DifficultyLevel
