import React from 'react'

export default function Sectiontwo() {
    const divStyle = {
        backgroundImage: 'url("./media/2.svg")', // Set the path to your image
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center', // Adjust as needed
        // Adjust the height as needed
        // Text color
    };
    return (
        <div>
            <div className='mainsectiontwo'>
                <div className='leftmainsectiontwo'>
                    <div className='leftsectiontwo111'>
                        <h1>Trustpilot</h1>
                        <img alt=' ' src="./media/1.svg" />
                        <h2>High-Speed & </h2>
                        <h3>Secure Servers </h3>
                        <h4>at Best Price in Industry.</h4>
                    </div>


                    <div className='yellowbg' style={divStyle}>

                        <h5><span>Microhost</span> India's First Cloud Platform with 16 years of experience and
                            success in helping over 20,000 businesses increase performance, reduce costs,
                            and secure their applications and databases.</h5>
                    </div>
                    <div className='startedbuttondiv'>
                        <button className='statedbutton'>
                            <h6>Get Started</h6>
                        </button>
                        <p>in just 30 seconds</p>
                    </div>


                </div>
                <div className='rightmainsectiontwo'>
                    <img alt=' ' src="./media/7.png" />
                </div>

            </div>
        </div>
    )
}
