import React from "react";
import './Home3.css';
import dad from "../family.jpg";
import trail1 from "../trail1.jpg";
import trail2 from "../trail2.jpg";
import trail3 from "../trail3.jpg";
import {MdSearch} from "react-icons/md";
import {BiMenu} from "react-icons/bi";
import mapple from "../icons/icon-mapple.svg";
import challenge from "../icons/icon-challenge.svg";
import hotSpring from "../icons/icon-hot-spring.svg";
import family from "../icons/icon-family.svg";
import home from "../icons/material-icons-black-home.svg";
import search2 from "../icons/material-icons-black-search2.svg";
import gps from "../icons/material-icons-black-gps.svg";
import favorite from "../icons/material-icons-black-favorite.svg";


function Home3(){
    return (
        <div className="container1">
          <nav className = "navBar">
            <div><BiMenu /></div>
            <div>Go Hiking</div>
            <div><MdSearch /></div>
          </nav>
          <div className = "container2">
              <section className = "contextBlock">
                  <div id = "text1">親子步道上線囉</div>
                  <div id = "text2">帶著你的老爸冒險去。</div>
                  <input type = "button" value= "查看步道→" id = "button1"></input>
              </section>
              <img src={dad} className = "peopleImage"></img>
              <div className = "pageControl"></div>
          </div>
          <div className = "greyRectangle"></div>
          <div className = "whiteRectangle">
            <div className = "quickSearch">
                <img src ={mapple} className = "quickSearchIcon" style={{width: "48px", height: "48px", padding: "12px 12px 0px 12px"}}></img>
                <div className = "quickSearchTitle" style = {{margin: "0px 21px 8px 22px", color: "#232323", fontSize: "14px", fontWeight:"700"}}>賞楓</div>
            </div>
            <div className = "quickSearch">
                <img src ={challenge} className = "quickSearchIcon" style={{width: "48px", height: "48px", padding: "12px 12px 0px 12px"}}></img>
                <div className = "quickSearchTitle" style = {{margin: "0px 21px 8px 22px", color: "#232323", fontSize: "14px", fontWeight:"700"}}>挑戰</div>
            </div>
            <div className = "quickSearch">
                <img src ={hotSpring} className = "quickSearchIcon" style={{width: "48px", height: "48px", padding: "12px 12px 0px 12px"}}></img>
                <div className = "quickSearchTitle" style = {{margin: "0px 21px 8px 22px", color: "#232323", fontSize: "14px", fontWeight:"700"}}>溫泉</div>
            </div>
            <div className = "quickSearch">
                <img src ={family} className = "quickSearchIcon" style={{width: "48px", height: "48px", padding: "12px 12px 0px 12px"}}></img>
                <div className = "quickSearchTitle" style = {{margin: "0px 21px 8px 22px", color: "#232323", fontSize: "14px", fontWeight:"700"}}>親子</div>
            </div>
          </div>
          <div className = "greyRectangle"></div>
          <div className = "recommendationTitle"><div>行程推薦</div></div>
              <div className =  "recommendation"> {/*有利用到flexbox */}
                <div className = "recommendationBlock">
                    <img src = {trail1} className = "recommendationBlockImage"></img>
                    <div className = "recommendationBlockTitle">2020跨年日出秘境步道...</div>
                    <div className = "recommendationBlockDate">2019-12-11</div>
                </div>
                <div className = "recommendationBlock">
                    <img src = {trail2} className = "recommendationBlockImage"></img>
                    <div className = "recommendationBlockTitle">2020跨年日出秘境步道...</div>
                    <div className = "recommendationBlockDate">2019-12-11</div>
                </div>
          </div>
          <div className = "greyRectangle"></div>
          <div className = "tab4"> {/*利用flex來切版 */}
            <div className = "tab">
                <img src = {home}></img>
                <div className = "tabText" style={{color: "#00d04c"}}>首頁</div>
            </div>
            <div className = "tab">
                <img src = {search2}></img>
                <div className = "tabText">步道搜尋</div>
            </div>
            <div className = "tab">
                <img src = {gps}></img>
                <div className = "tabText">附近步道</div>
            </div>
            <div className = "tab">
                <img src = {favorite}></img>
                <div className = "tabText">我的收藏</div>
            </div>
          </div>
          
        </div>
    );
};

export default Home3; 