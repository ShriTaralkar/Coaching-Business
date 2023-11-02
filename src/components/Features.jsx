import React from 'react'


function Features() {
    return (
        <section className="m-auto py-8 text-center">
            <header className="m-3">
                <h2 className="text-5xl font-bold">Features</h2>
                <h3 className="m-1 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quia?</h3>
            </header>
            {featuresList.map((item, index) => (
                <Feature key={index} heading={item.header} body={item.body} image={item.image} />
            ))}
        </section>
    )
}

const Feature = ({ heading, body, image }) => {
    return (
        <div className="p-5 flex flex-col-reverse md:odd:flex-row-reverse md:even:flex-row justify-evenly items-center odd:bg-green-300 even:bg-yellow-300">
            <div className="w-3/4 md:w-1/2 text-center md:text-left">
                <header>
                    <h4 className="my-4 text-3xl font-bold">{heading}</h4>
                    <p className="my-2 text-lg text-gray-600">{body}</p>
                </header>
            </div>
            <div className="p-5">
                <img className="rounded-lg h-96 shadow-lg" src={image} alt="Assistance with work" />
            </div>
        </div>
    )
}

const featuresList = [
    {
        header: "Feature 1",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus animi molestias nemo libero doloribus modi eos harum earum, praesentium quia minus tenetur sed blanditiis ea omnis obcaecati officiis dignissimos iure.",
        image: "https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        header: "Feature 2",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus animi molestias nemo libero doloribus modi eos harum earum, praesentium quia minus tenetur sed blanditiis ea omnis obcaecati officiis dignissimos iure.",
        image: "https://images.pexels.com/photos/3861952/pexels-photo-3861952.jpeg"
    },
    {
        header: "Feature 3",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus animi molestias nemo libero doloribus modi eos harum earum, praesentium quia minus tenetur sed blanditiis ea omnis obcaecati officiis dignissimos iure.",
        image: "https://images.pexels.com/photos/3861561/pexels-photo-3861561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]

export default Features