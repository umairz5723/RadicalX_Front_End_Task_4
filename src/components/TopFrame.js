import "./styles/topframe.css"
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";
import { Link } from 'react-router-dom';

function TopFrame(props) {

   var redirect_to = props.go_to;
  

    return <div id="top-frame">
    <div className="top-left"><TfiArrowLeft/>Back</div>
    <div className="top-mid">Add New Internship </div>
    <div className="top-right">  <div className="top-right-button"> <Link to={redirect_to} style={{ textDecoration: 'none' }}> Continue to Next Step </Link> <TfiArrowRight/> </div>  </div>

    </div>
}

export default TopFrame;