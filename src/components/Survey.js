import TopFrame from "./TopFrame";
import MidFrame from "./MidFrame"
import { FaBars } from "react-icons/fa";
import "./styles/survey.css";
import "./styles/leftcontainer.css"
import { AiOutlineCaretRight, AiOutlinePlusSquare } from "react-icons/ai";
import { useState } from "react";

function Survey(){

    const [showSurveyTab, setSurveyTab] = useState(0);
      
    const handleSurveyTab = (e) => {
         setSurveyTab(e);
      }

    return <div>
        <TopFrame go_to="/settings" />
        <MidFrame
            color1="#793EF5"
            color2="#793EF5"
            color3="#1E1E1E"
            color4="#D3D3D3"
        />

        <div className="survey-left-frame">
            
            <div className={showSurveyTab === 1 ? "category-tab" : "category-title"} onClick={()=> {handleSurveyTab(1)}}>
                    <div className="bars"><FaBars/></div>
                    <p style={{marginLeft:"15px"}}> Survey 1 </p>
                    <i className="toggle-btn"><AiOutlineCaretRight style={{marginRight:"20px"}}/></i>  
                </div>

            <div className={showSurveyTab === 2 ? "category-tab" : "category-title"} onClick={()=> {handleSurveyTab(2)}}>
                    <div className="bars"><FaBars/></div>
                    <p style={{marginLeft:"15px"}}> Survey 2 </p>
                    <i className="toggle-btn"><AiOutlineCaretRight style={{marginRight:"20px"}}/></i>  
                </div>

        </div>

        <div className="survey-right-frame">
            
            <div className={showSurveyTab === 1 ? "survey-1" : "none"}>
                <div className="title"> Survey 1</div>
                <input type="text" className="text-input-frame" placeholder="Question"></input>
                <div  className="added-tab"> <AiOutlinePlusSquare/> Add Question</div>
            </div> 
            
        
            <div className={showSurveyTab === 2 ? "survey-2" : "none"}>
                <div className="title"> Survey 2</div>
                <input type="text" className="text-input-frame" placeholder="Question"></input>
                <div  className="added-tab"> <AiOutlinePlusSquare/> Add Question</div>
            </div> 
    

    </div>
</div>
}

export default Survey;