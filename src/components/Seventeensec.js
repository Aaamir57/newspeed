import React from 'react'

export default function Seventeensec() {
    const divStyle = {
        backgroundImage: 'url("./media/20.png")', // Set the path to your image
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center', // Adjust as needed
        
    };
    return (
        <div>
            <div className='seventeenmain'  style={divStyle}>
                <h1>FREE WEBINAR</h1>
                <h2>Microhost is please to announce for the coming webinar </h2>
                <h3>Still in Confusion Join this exclusive webinar</h3>
                <h4>Join Webinar on: Thursday 17th, 2023</h4>
                <button className='statedbutton1'>
                    <h6>Conserve your spot</h6>
                </button>
            </div>
        </div>
    )
}

