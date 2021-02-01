import "./Home.css";
import sample from "../sample.jpg";
import { Link } from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {AiFillFacebook} from "react-icons/ai";
import {FaApple} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi"

function App() {
  return (
    <div className="containerHome">
      <div className="up">
        <img src={sample} alt="" className="sampleImage" />
        <div className="goHikingText">GO HIKING</div>
      </div>
      <div className="down" >
        <FcGoogle className = "iconGoogle"/>
        <input
          type="button"
          className="rectangleGoogle"
          defaultValue="透過Google登入"
        />
        
        <AiFillFacebook className = "iconFacebook"/>
        <input
          type="button"
          className="rectangleFacebook"
          defaultValue="透過Facebook登入"
        />

        <FaApple className = "iconApple"/>
        <input
          type="button"
          className="rectangleApple"
          defaultValue="透過Apple ID登入"
        />
        <HiOutlineMail className = "iconEmail"/>
        <input
          type="button"
          className="rectangleEmail"
          defaultValue="透過Email登入"
        />
      </div>
      <div style={{ width: "178px", height: "21px", margin: "24px 117px 22px 116px", textAlign: "center", fontSize:"14px", letterSpacing: "0.5px", fontFamily: "Noto Sans TC" }}>
        還不是會員嗎? <Link to="/register">註冊新帳號</Link>
      </div>
      <button type="button" className="useButton">
        直接使用
      </button>
    </div>
  );
}

export default App;
