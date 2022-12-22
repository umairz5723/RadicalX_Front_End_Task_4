import './styles/rightcontainer.css';
import { BsFileEarmarkArrowUpFill } from "react-icons/bs";
import { AiOutlineClose ,AiOutlineFileAdd } from "react-icons/ai";


function RightContainer(props){

 return <div className="content-container">

    <div className={props.tab === 1 ? "overview-output" : "none"}>
        <div className="title"> Brief</div>
            <input type="text" className="text-input-frame" placeholder="Description"></input>
            <div className="video-upload-frame"> Drag n drop to upload your video <BsFileEarmarkArrowUpFill/> </div>
            <div className="added"> Filename.pptx <AiOutlineClose/></div>

        <div className="title"> Requirements</div>
            <input type="text" className="text-input-frame" placeholder="Description"></input>
            <div className="video-upload-frame"> Drag n drop to upload your video <BsFileEarmarkArrowUpFill/> </div>
            <div className="added"> Filename.pptx <AiOutlineClose/></div>

        <div className="title"> Milestones </div>
            <input type="text" className="text-input-frame" placeholder="Description"></input>
            <div className="video-upload-frame"> Drag n drop to upload your video <BsFileEarmarkArrowUpFill/> </div>
            <div className="added"> Filename.pptx <AiOutlineClose/></div>

        
    </div>


    <div className={props.tab === 2 ? "schedule-output" : "none"}>
        
        <div className="title"> Duration </div>
            <input type="text" className="text-input-frame" placeholder="Description"></input>
            <div className="video-upload-frame"> Drag n drop to upload your video <BsFileEarmarkArrowUpFill/> </div>
            <div className="added"> Filename.pptx <AiOutlineClose/></div>

        <div className="title"> Timeline </div>
            <input type="text" className="text-input-frame" placeholder="Description"></input>
            <div className="video-upload-frame"> Drag n drop to upload your video <BsFileEarmarkArrowUpFill/> </div>
            <div className="added"> Filename.pptx <AiOutlineClose/></div>

        <div className="title"> Deliverables </div>
            <input type="text" className="text-input-frame" placeholder="Description"></input>
            <div className="video-upload-frame"> Drag n drop to upload your video <BsFileEarmarkArrowUpFill/> </div>
            <div className="added"> Filename.pptx <AiOutlineClose/></div>

        </div>

    <div className={props.tab === 3 ? "resources-output" : "none"}>
        
        <div className="title">Curated Resources</div>
        <input type="text" className="text-input-frame" placeholder="Description"></input>
        <div className="video-upload-frame"> Drag n drop to upload your video <BsFileEarmarkArrowUpFill/> </div>
        <div className="added"> Filename.pptx <AiOutlineClose/></div>

        <div className="title"> Events </div>
        <input type="text" className="text-input-frame" placeholder="Description"></input>
        <div className="video-upload-frame"> Drag n drop to upload your video <BsFileEarmarkArrowUpFill/> </div>
        <div className="added"> Filename.pptx <AiOutlineClose/></div>

    </div>


        </div>

}

export default RightContainer;