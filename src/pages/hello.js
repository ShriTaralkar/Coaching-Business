import React from 'react'
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Jumbotron from '../components/Jumbotron';
import Purpose from '../components/Purpose';
import Features from '../components/Features';
import Contact from '../components/Contact';


import mindVector from '../images/icons/mind-vector.svg'


function Hello() {
    return (
        <article>
            <header className="relative">
                <Navbar />
            </header>
            <Content />
            <Hero />
            <Jumbotron 
                header="What is Life Coaching?" 
                subheader="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, dolores?" 
                body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate praesentium odit, minima, explicabo cum mollitia facere hic ipsa officiis quo laboriosam deleniti? Rem aspernatur totam dignissimos debitis dicta provident ratione!" 
                imgsrc={mindVector}
            />
            <Purpose />
            <Features />
            <Contact />
            
        </article>
    )
}

export default Hello;

export const Head = () => (
    <title>Hello</title>
)
