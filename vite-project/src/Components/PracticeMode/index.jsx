import Keyboard from "./Keyboard";
import PracticeHeader from "./Practiceheader";
import Wordsboard from "./Wordsboard";
import './prac.css'

function PracticeMode() {
    return (
        <div className="practice-container">
            <PracticeHeader />      
            <Wordsboard />
            <Keyboard />    
        </div>

    )
}

export default PracticeMode;