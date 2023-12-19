
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Newfour() {
    useEffect(() => {
        AOS.init();
      }, []);
    
    return (
        <div>
            <div className='newfourmain'>
                <div className='newfourmainleft ' data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                    <h1>The Best Quality
                        Hosting Features</h1>
                        <img alt=' ' src="./media/124.svg" className='imgline' />
                    <div className='newfourmainleft1'>
                        <img alt=' ' src="./media/103.svg" />
                        <h2><span>Deploy in 30 seconds:</span> Easily and quickly deploy your software or application in
                            just 30 seconds. This saves your time and effort, and lets you get to work faster.</h2>
                    </div>
                    <div className='newfourmainleft1'>
                        <img alt=' ' src="./media/103.svg" />
                       <h2>
                        <span>
                        24x7 Human Support on Phone, Email,Tickets:
                        </span> No automated voice, just speak with a real human being
                        over the phone, send an email, or submit a ticket, and get the help you need at any time.
                       </h2>
                    </div>
                    <div className='newfourmainleft1'>
                        <img alt=' ' src="./media/103.svg" />
                       <h2><span>
                       30 Minutes Guaranteed Response:
                       </span> You won't have to wait long for assistance, receive a response from the 
                       support team within just 30 minutes of submitting a request for help</h2>
                    </div>
                    <h3>Explore More Features:</h3>
                </div>
               
                <div className='newfourmainright' >
                <img alt=' ' src="./media/101.svg" data-aos="fade-down" data-aos-once="true" data-aos-duration="1000" />
                </div>
            </div>
        </div>
    )
}
