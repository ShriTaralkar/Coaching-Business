import React from "react";

const position = [53.3853349, -6.2614152, 17]

function Map() {
    return (
        <iframe
            title="Business Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100785.8847446737!2d144.9188324786891!3d-37.870610307738616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6429e70bca623%3A0xd1a94ecbdec2cae!2sNash%20Management%20Group%20PTY%20Ltd.!5e0!3m2!1sen!2sie!4v1698495315266!5m2!1sen!2sie"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="border-2 rounded-xl flex-wrap"
        ></iframe>
    )
}

export default Map