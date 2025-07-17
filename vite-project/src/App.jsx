// import { useState } from 'react'
import Keyboard from './Components/PracticeMode/Keyboard';
import PracticeHeader from './Components/PracticeMode/Practiceheader';
import Wordsboard from './Components/PracticeMode/Wordsboard';



function App() {

  return (
    
    <div className='App'>
      <div className='PracticeMode'>
        <PracticeHeader />
        <Keyboard />
        <Wordsboard/>
      </div>
      <div className='DailyMode'>

      </div>
    </div>
  )
}

export default App
