import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "../Styles/Skills.css";
import cards from "../Assets/Images/playingcards.webp";
import cards1 from "../Assets/Images/playingcrads2.jpeg";
import cards2 from "../Assets/Images/playingcards3.webp";
import {EffectCards} from "swiper/modules";

export const Skills = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    function handleclick(){
        console.log({activeIndex});
    }
    return(
        <div className="Skills-Main-Container">
            <div className="Skills-Inner-Container">
                <div className="Skills-Content-Container">
                    <p>{activeIndex}</p>
                    {/* <button onClick={handleclick}>click here</button> */}
                </div>
                <div className="Skills-Card-Container">
                    {/* <img src={cards}/> */}
                    <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        onRealIndexChange={(element)=>setActiveIndex(element.activeIndex)}
      >
        <SwiperSlide><img src={cards}/></SwiperSlide>
        <SwiperSlide><img src={cards1}/></SwiperSlide>
        <SwiperSlide><img src={cards2}/></SwiperSlide>

      </Swiper>
                </div>
            </div>
       </div>
        
    );
}