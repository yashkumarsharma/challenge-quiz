import React from 'react'

import { QuizScreen } from './component'
// These questions can be moved to a more relevant position
// But keeping it here for the moment
import questions from './questions'

function App () {
  return (
    <QuizScreen questions={questions} />
  )
}

export default App
