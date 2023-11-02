import React from 'react'

function Content() {
  return (
    <section className="px-10 mt-16">
        <h2 className="text-2xl font-bold">Contents of the webpage</h2>
        <ul className="list-disc">
            <li>Testimonials</li>
            <li>Certifications</li>
            <li>
                Projects & Experience
                <ul className="indent-4">
                    <li>Summarise here</li>
                    <li>Leading to a different webpage</li>
                </ul>
            </li>
            <li>Certifications</li>
            <li>Blockquote</li>
            <li>FAQs</li>
            <li>Footer & Quick Links</li>
            <li>
                Navbar
                <ul className="indent-4">
                    <li>Logo design</li>
                </ul>
            </li>
            <li>
                Hero section
                <ul className="indent-4">
                    <li>Vectors and interactive design</li>
                    <li>Color scheme and font design</li>
                    <li>Title of the whole system</li>
                    <li>Transitions and animations for the title from CodePen</li>
                </ul>
            </li>
        </ul>
    </section>
  )
}

export default Content