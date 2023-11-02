import React from 'react';
import { ImRocket } from '@react-icons/all-files/im/ImRocket';
import { FaChartLine } from '@react-icons/all-files/fa/FaChartLine';
import { GiTeacher } from '@react-icons/all-files/gi/GiTeacher'

function Purpose({ header, subheader, body, imgsrc }) {
    return (
        <section className="m-auto p-8 text-center">
            <header className="m-3">
                <h2 className="text-5xl font-bold">Purpose</h2>
                <h3 className="m-1 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quia?</h3>
            </header>
            <div className="md:w-1/2 m-auto p-2 flex flex-col items-center leading-8">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, temporibus fuga numquam similique, dolorum veniam voluptatum cum consequuntur magni quisquam unde, sapiente nam veritatis pariatur ab rem ducimus ex quaerat recusandae exercitationem! Asperiores, autem vero dolore facere magnam sit laboriosam incidunt placeat error quia, inventore ut vitae tenetur dolorem eos.</p>
                <span className="m-1 w-1/2 md:w-1/3 flex justify-evenly text-3xl text-gray-600 text-center">
                    <GiTeacher /><FaChartLine /><ImRocket />
                </span>
            </div>
        </section>
    )
}

export default Purpose