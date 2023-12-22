
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Newfive() {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className='newfivepro'>
            <div className='newfivemain'>
                <div className='newfivemainleft' data-aos="flip-up" data-aos-once="true" data-aos-duration="1000">
                    <h1 className='linefive'>No-Questions-Asked</h1>
                        <h1  className='linefive'>30-Day
                      
                            <span>Refund Guarantee</span>
                    
                        </h1>
                    <h2>Our policy is to serve customers the way we would want to be treated. No questions asked, we provide a
                        30-day money-back guarantee on all of our products. If you are not satisfied, just request a refund within 30 days.</h2>
                    <div className='bgnewfive'>
                        <h2>ASK OUR EXPERT</h2>
                    </div>

                </div>
                <div className='newfivemainright'>
                    <img  src="./media/100.png" data-aos="flip-up" data-aos-once="true" data-aos-duration="1000"  alt="No-Questions-Asked 30-Day Refund Guarantee" />
                </div>
            </div>
        </div>
    )
}
