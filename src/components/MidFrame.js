import "./styles/midframe.css"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function MidFrame(props) {

    const color_1 = props.color1;
    const color_2 = props.color2;
    const color_3 = props.color3;
    const color_4 = props.color4;
    

    return <div id="mid-frame">
    <div className="description-frame" style={{color:color_1}}> <AiOutlineLoading3Quarters/> Internship Description </div>
    <div className="guide-frame" style={{color:color_2}}> <AiOutlineLoading3Quarters/> Internship Guide </div>
    <div className="survey-frame" style={{color:color_3}}> <AiOutlineLoading3Quarters/> Surveys</div>
    <div className="settings-frame" style={{color:color_4}}> <AiOutlineLoading3Quarters/> Settings</div>
</div>
}

export default MidFrame;