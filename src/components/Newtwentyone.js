import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Newtwentyone() {
    useEffect(() => {
        AOS.init();
      }, []);
    
    return (
        <div>
            <div className='newtwentyonemain'>
                <div className='newtwentyonemain1' data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000">

                </div>
                <div className='newtwentyonemain2'  data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000">
                    <h1>FREE WEBINAR</h1>
                    <h2>Microhost is please to announce for the coming webinar </h2>
                    <h3>Still in Confusion <br/>Join this exclusive webinar</h3>
                    <h4>Join Webinar on: <span> Thursday 17th, 2023</span></h4>
                    <button className='statedbutton1'>
                        <h6>Conserve your spot</h6>
                    </button>
                </div>

            </div>

        </div>
    )
}
