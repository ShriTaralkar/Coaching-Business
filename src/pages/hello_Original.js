import React from 'react'
import Navbar from '../components/Navbar';
/* import Content from '../components/Content'; */
import Hero from '../components/Hero';
import Jumbotron from '../components/Jumbotron';
import Mission from '../components/Mission';
import Features from '../components/Features';
import Contact from '../components/Contact';


import mindVector from '../images/icons/mind-vector.svg'


function Hello() {
    return (
        <article>
            <header className="relative">
                <Navbar />
            </header>
            {/* <Content /> */}
            <Hero />
            <Jumbotron 
                header="Supercharge Your Success!" 
                subheader="Soar to new heights, achieve remarkable success, and ensure your path is as invigorating as it is rewarding." 
                body="You've already conquered so much, but you're not settling for 'good enough.' You crave thriving, making a massive impact, and infusing more joy into your journey. You've got the talent and drive, but here's the catch: you want to win without wearing yourself and your team down. Welcome to our coaching services—your key to unleashing your full potential. We'll help you soar to new heights, achieve remarkable success, and ensure your path is as invigorating as it is rewarding.!" 
                imgsrc={mindVector} 
            />
            <Mission />
            <Features />
            <Contact />
            
        </article>
    )
}

export default Hello;

export const Head = () => (
    <title>Hello</title>
)
