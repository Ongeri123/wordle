import { useState } from 'react'
import Keyboard from './Components/PracticeMode/Keyboard'
import Wordsboard from './Components/PracticeMode/Wordsboard'
import PracticeHeader from './Components/PracticeMode/Practiceheader'


function App() {
  

  return (
    <>
      <div>
        <Keyboard />
        <Wordsboard />
        <PracticeHeader/>
      </div>
    </>
  )
}

export default App
