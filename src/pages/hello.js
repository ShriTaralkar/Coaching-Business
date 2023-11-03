import React from 'react'
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Mission from '../components/Mission';
import Features from '../components/Features';
import Contact from '../components/Contact';

import Hero from '../components/Hero';
import mindVector from '../images/icons/mind-vector.svg';

function Hello() {
  return (
    <article>
      <header className="relative">
        <Navbar />
      </header>
      {/* Jumbotron with a higher z-index to appear in front of the Hero image */}
      <Jumbotron
        header="Supercharge Your Success!"
        subheader="Soar to new heights, achieve remarkable success, and ensure your path is as invigorating as it is rewarding."
        body="You've already conquered so much, but you're not settling for 'good enough.' You crave thriving, making a massive impact, and infusing more joy into your journey. You've got the talent and drive, but here's the catch: you want to win without wearing yourself and your team down. Welcome to our coaching services—your key to unleashing your full potential. We'll help you soar to new heights, achieve remarkable success, and ensure your path is as invigorating as it is rewarding.!"
        imgsrc={mindVector}
        style={{ zIndex: 2 }} // Set a higher z-index
      />
      <Mission />
      <Features />
      <Contact />
      <Hero /> {/* Hero component will appear below Jumbotron */}
    </article>
  )
}

export default Hello;

export const Head = () => (
  <title>Hello</title>
)
