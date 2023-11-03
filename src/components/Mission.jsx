import React from 'react';
import { ImRocket } from '@react-icons/all-files/im/ImRocket';
import { FaChartLine } from '@react-icons/all-files/fa/FaChartLine';
import { GiTeacher } from '@react-icons/all-files/gi/GiTeacher'

function Mission({ header, subheader, body, imgsrc }) {
    return (
        <section className="m-auto p-8 text-center">
            <header className="m-3">
                <h2 className="text-5xl font-bold">Our Mission</h2>
            </header>
            <div className="md:w-1/2 m-auto p-2 flex flex-col items-center leading-8">
                <p>"To kindle the leadership flame with humility, empathy, and skill, fostering environments of thriving, inclusivity, and unwavering purpose, sparking success and personal growth for every individual."</p>
                <span className="m-1 w-1/2 md:w-1/3 flex justify-evenly text-3xl text-gray-600 text-center">
                    <GiTeacher /><FaChartLine /><ImRocket />
                </span>
            </div>
        </section>
    )
}

export default Mission