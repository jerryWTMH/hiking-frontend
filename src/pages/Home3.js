import React from "react";
import './Home3.css';
import dad from "../family.jpg";
import {MdSearch} from "react-icons/md";
import {BiMenu} from "react-icons/bi";
import mapple from "../icons/icon-mapple.svg";
import challenge from "../icons/icon-challenge.svg";
import hotSpring from "../icons/icon-hot-spring.svg";
import family from "../icons/icon-family.svg";


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
                <img  src ={mapple} className = "quickSearchIcon"></img>
                <div className = "quickSearchTitle"></div>
            </div>
            <div className = "quickSearch">
                <img  src ={challenge} className = "quickSearchIcon"></img>
                <div className = "quickSearchTitle"></div>
            </div>
            <div className = "quickSearch">
                <img  src ={hotSpring} className = "quickSearchIcon"></img>
                <div className = "quickSearchTitle"></div>
            </div>
            <div className = "quickSearch">
                <img  src ={family} className = "quickSearchIcon"></img>
                <div className = "quickSearchTitle"></div>
            </div>
          </div>
          <div className = "greyRectangle"></div>
          <div className = "recommendationText"></div>
              <div className =  "recommendation">
                <div className = "recommendationBlock">
                    <div className = "recommendationBlockImage"></div>
                    <div className = "recommendationBlockTitle"></div>
                    <div className = "recommendationBlockDate"></div>
                </div>
                <div className = "recommendationBlock">
                    <div className = "recommendationBlockImage"></div>
                    <div className = "recommendationBlockTitle"></div>
                    <div className = "recommendationBlockDate"></div>
                </div>
          </div>
          <div className = "greyRectangle"></div>
          <div className = "tab4"> {/*利用flex來切版 */}
            <div className = "tab"></div>
            <div className = "tab"></div>
            <div className = "tab"></div>
            <div className = "tab"></div>
          </div>
          
        </div>
    );
};

export default Home3; 