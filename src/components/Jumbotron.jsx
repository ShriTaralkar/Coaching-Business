import React from 'react';

function Jumbotron({ header, subheader, body, imgsrc }) {
    return (
        <section className="m-auto p-8 text-center bg-green-200">
            <header className="m-3">
                <h2 className="text-5xl font-bold">{header}</h2>
                <h3 className="m-1 text-gray-400">{subheader}</h3>
            </header>
            <div className="flex items-center text-justify text-xl md:w-3/4 m-auto text-black">
                <p>{body}</p>
                <img src={imgsrc} alt="" className="img-fluid w-52 hidden md:block text-gray-500" />
            </div>
        </section>
  )
}

export default Jumbotron