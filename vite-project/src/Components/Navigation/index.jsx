import Dailybutton from "./Dailybutton";
import Helpbutton from "./Helpbutton";
import Practicebutton from "./Practicebutton";
import Settingsbutton from "./Settings";
import Statisticsbutton from "./Statistics";
import Retrybutton from "./Retry";
import Nextbutton from "./Nextbutton";
import './nav.css'

 

function Navigation() {
    return (
        <div className="navigation" style ={{marginBottom:'30px', marginTop:'30px'}}>
            <div className="game-nav">
                <Dailybutton />
                <Practicebutton />
            </div>
            <div className="settings-nav">
                <Retrybutton />
                <Nextbutton />
                <Settingsbutton />
                <Helpbutton />
                <Statisticsbutton />
            </div>
       </div>
     )
}
 
export default Navigation;