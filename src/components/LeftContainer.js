import './styles/leftcontainer.css';
import './styles/midframe.css';
import { useState } from "react";
import RightContainer from './RightContainer';
import { AiOutlineCaretRight, AiOutlinePlusSquare, AiOutlineFileAdd} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import TopFrame from './TopFrame';
import MidFrame from './MidFrame';

function LeftContainer({}){

    const [showTab, setShowTab] = useState(0);
      
    const handleTab = (e) => {
         setShowTab(e);
      }
    
  
    return <div>

    <TopFrame go_to="/survey" />
    <MidFrame
          color1="#793EF5"
          color2="#1E1E1E"
          color3="#D3D3D3"
          color4="#D3D3D3"
        />
    <div className="menu-container">
                <div className={showTab === 1 ? "sidebar-item open" : "test"}>

                        <div className={showTab === 1 ? "category-title-active" : "category-title"} onClick={()=> {handleTab(1)}}>
                        <div className="bars"><FaBars/></div>
                          <p> Overview </p>
                            <i className="toggle-btn"><AiOutlineCaretRight style={{marginRight:"20px"}}/></i>  
                            </div>
                            <div className="sidebar-content">
                            <div className="inner-tab"><FaBars/><p style={{marginLeft:"20px"}}> Brief </p></div>
                            <div className="inner-tab"><FaBars/><p style={{marginLeft:"20px"}}> Requirements </p></div>
                            <div className="inner-tab"><FaBars/><p style={{marginLeft:"20px"}}> Milestones </p></div>
                            <div className="add-more-tab"><AiOutlinePlusSquare/><p>Add More</p></div>
                        </div>
                    </div>

                    <div className={showTab === 2 ? "sidebar-item open" : "test"}>
                
                        <div className={showTab === 2 ? "category-title-active" : "category-title"} onClick={()=> {handleTab(2)}}>
                        <div className="bars"><FaBars/></div>
                            <p> Schedule </p>
                            <i className="toggle-btn"><AiOutlineCaretRight style={{marginRight:"20px"}}/></i>  
                            </div>
                            <div className="sidebar-content">
                            <div className="inner-tab"><FaBars/><p style={{marginLeft:"20px"}}> Duration </p></div>
                            <div className="inner-tab"><FaBars/><p style={{marginLeft:"20px"}}> Timeline </p></div>
                            <div className="inner-tab"><FaBars/><p style={{marginLeft:"20px"}}> Deliverables </p></div>
                            <div className="add-more-tab"><AiOutlinePlusSquare/><p>Add More</p></div>
                        </div>
                    </div>

                    <div className={showTab === 3 ? "sidebar-item open" : "test"}>
                
                        <div className={showTab === 3 ? "category-title-active" : "category-title"} onClick={()=> {handleTab(3)}}>
                            <div className="bars"><FaBars/></div>
                                <p> Resources </p>
                                <i className="toggle-btn"><AiOutlineCaretRight style={{marginRight:"20px"}}/></i>  
                            </div>
                            <div className="sidebar-content">
                            <div className="inner-tab"><FaBars/><p style={{marginLeft:"20px"}}> Curated Resources </p></div>
                            <div className="inner-tab"><FaBars/><p style={{marginLeft:"20px"}}> Events </p></div>
                            <div className="add-more-tab"><AiOutlinePlusSquare /><p>Add More</p></div>
                        </div>
                    </div>

                    <div className="add-chapter-tab"><AiOutlineFileAdd/>Add Chapter</div>
            
            
                    <RightContainer tab={showTab}/>
            </div>   
</div>
  } 

  export default LeftContainer;