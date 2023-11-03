import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import HeroImage from "../images/Vertical_Doorway_Nature.jpg";

function Hero() {
  // Create a ref to access the <section> element
  const sectionRef = useRef(null);

  // State to store the container dimensions
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Function to update container size
    function updateContainerSize() {
      if (sectionRef.current) {
        const { offsetWidth, offsetHeight } = sectionRef.current;
        setContainerSize({ width: offsetWidth, height: offsetHeight });
      }
    }

    // Call the function initially and add a resize event listener
    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateContainerSize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="md:h-screen md:px-3 flex flex-col items-center md:flex-row md:justify-between transition-all">
      <div className="left max-w-1/2 flex flex-col justify-evenly items-center md:items-start p-4 text-center md:text-left">
        <h1 className="text-6xl my-2 font-bold">Leading with Humility = Fostering Excellence.</h1>
        <p className="text-lg my-2 text-left">Inspiring Leaders Transform Organisations. Traditional, authoritarian leadership styles are no longer as effective, and organisations are increasingly recognizing the value of humble leadership qualities.</p>
        <button className="my-2 p-4 w-48 flex items-center justify-evenly bg-sky-blue text-grey capitalize rounded-full font-bold transition-all duration-300 hover:translate-x-2">Schedule a free discovery session<AiOutlineArrowRight /></button>
      </div>
      <div className="right flex max-w-1/2 p-4">
        <img src={HeroImage} alt="" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    </section>
  )
}

export default Hero;

