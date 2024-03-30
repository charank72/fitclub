import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
function Hero() {
  const transition={type:'spring',duration:3}
  const mobile=window.innerWidth<=768?true:false;
  return (
    <div className="hero" id="heros">
      <div className="blur blur-h"></div>
      <div className="hero-l">
        {<Header />}
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
          initial={{left:mobile?"165px":"238px"}}
          whileInView={{left:"8px"}}
          transition={{...transition,type:"tween"}}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Fit body</span>
          </div>
          <div className="span">
            <span>
              in here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+<NumberCounter end={140} start={100} delay="4" prefix="+" /></span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+<NumberCounter end={978} start={800} delay="4" prefix="+" /></span>
            <span>members joined</span>
          </div>
          <div>
            <span>+<NumberCounter end={50} start={0} delay="4" prefix="+" /></span>
            <span>fitness programs</span>
          </div>
        </div> 
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="hero-r">
        <button className="btn">Join now</button>
        <motion.div
        initial={{right:'-1rem'}}
        whileInView={{right:"4rem"}}
        transition={transition}

        className="heart">
          <img src={heart} alt="" />
          <span>heart rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero image */}
        <img src={hero_image} className="hero_image" alt="" />
        <img src={hero_image_back} className="hero_image_back" alt="" />
        <motion.div 
        initial={{right:'37rem'}}
        whileInView={{right:"30rem"}}
        transition={transition}
        className="calories">
          <img src={calories}  alt="" />
          <div className="calories-description">
            <span>Calorires burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
