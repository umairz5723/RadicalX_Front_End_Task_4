import TopFrame from "./TopFrame";
import MidFrame from "./MidFrame";
import "./styles/leftcontainer.css";
import "./styles/survey.css";
import "./styles/settings.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineCaretRight, AiOutlinePlusSquare } from "react-icons/ai";
import { useState } from "react";

function Settings(){

    const [showSettingsTab, setSettingsTab] = useState(0);
      
    const handleSettingsTab = (e) => {
         setSettingsTab(e);
      }

    return <div>
        <TopFrame
            go_to="/" />
        <MidFrame 
            color1="#793EF5"
            color2="#793EF5"
            color3="#793EF5"
            color4="#1E1E1E"
        />
        
        <div className="settings-container">
            
            <div className={showSettingsTab === 1 ? "category-tab" : "category-title"} onClick={()=> {handleSettingsTab(1)}}>
                    <div className="bars"><FaBars/></div>
                    <p style={{marginLeft:"15px"}}> Basic Settings </p>
                    <i className="toggle-btn"><AiOutlineCaretRight style={{marginRight:"20px"}}/></i>  
                </div>

            <div className={showSettingsTab === 2 ? "category-tab" : "category-title"} onClick={()=> {handleSettingsTab(2)}}>
                    <div className="bars"><FaBars/></div>
                    <p style={{marginLeft:"15px"}}> Hero Image </p>
                    <i className="toggle-btn"><AiOutlineCaretRight style={{marginRight:"20px"}}/></i>  
                </div>

        </div>

        <div className={(showSettingsTab === 1) || (showSettingsTab === 2)  ? "right-box-settings" : "none"}>

                <div className="title"> Internship URL </div>
                <input type="text" className="text-input-frame" placeholder="radicalx-internship-url"></input>
                <h4> Access </h4>
                <div> <input type="checkbox" id="private-internship" name="private" value="private_intern"/>
                    <label for="private-internship"> Private Internship</label> </div>
                <div> <input type="checkbox" id="hidden-internship" name="hidden" value="hidden_intern"/>
                    <label for="private-internship"> Hidden Internship</label> </div>
                <h4> Security </h4>
                <div> <input type="checkbox" id="disable_text"/>
                    <label for="disable_text"> Disable Text Copying</label> </div>
        </div>

    </div>
}


export default Settings;