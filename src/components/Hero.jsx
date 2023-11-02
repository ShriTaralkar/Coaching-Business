import React from 'react';

/* import assets */
/* import assets */ 

/* icon imports */
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
/* icon imports */

function Hero() {
  return (
    <section className="md:h-screen md:px-3 flex flex-col items-center md:flex-row md:justify-between transition-all ">
        <div className="left max-w-1/2 flex flex-col justify-evenly items-center md:items-start p-4 text-center md:text-left">
            <h1 className="text-6xl my-2 font-bold">Large text to recenter the train of thought</h1>
            <p className="text-lg my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, earum.</p>
            <button className="my-2 p-4 w-36 flex items-center justify-evenly bg-green-500 text-white capitalize rounded-full font-bold transition-all duration-300 hover:translate-x-2">Get a demo <AiOutlineArrowRight /></button>
        </div>
        <div className="right flex max-w-1/2 p-4">
            <img src="https://img.freepik.com/free-vector/isometric-soft-skills-concept-icon-with-three-characters-listening-their-mentor_1284-63039.jpg?w=740&t=st=1696941746~exp=1696942346~hmac=9418a5b4523388a8e3300d4050a06c271a708b21af7e914f8b8e1e3b6a2671ace" alt="" className="img-fluid" />
        </div>
    </section>
  )
}

export default Hero;