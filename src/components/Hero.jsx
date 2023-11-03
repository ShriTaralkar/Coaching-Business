import React from 'react';

/* import assets */
/* import assets */ 

/* icon imports */
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
/* icon imports */
/*import HeroImage from "../images/Vertical_Doorway_Nature.jpg"; */

function Hero() {
  return (
    <section className="md:h-screen md:px-3 flex flex-col items-center md:flex-row md:justify-between transition-all ">
        <div className="left max-w-1/2 flex flex-col justify-evenly items-center md:items-start p-4 text-center md:text-left">
            <h1 className="text-6xl my-2 font-bold">Leading with Humility = Fostering Excellence.</h1>
            <p className="text-lg my-2 text-left">Inspiring Leaders Transform Organisations. Traditional, authoritarian leadership styles are no longer as effective, and organisations are increasingly recognizing the value of humble leadership qualities.</p>
            <button className="my-2 p-4 w-48 flex items-center justify-evenly bg-sky-blue text-grey capitalize rounded-full font-bold transition-all duration-300 hover:translate-x-2">Schedule a free discovery session<AiOutlineArrowRight /></button>
        </div>
        <div className="right flex max-w-1/2 p-4">
            <img src="../images/Vertical_Doorway_Nature.jpg" alt="" className="img-fluid" />
        </div>
    </section>
  )
}

export default Hero;