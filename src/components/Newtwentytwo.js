import React, { useState } from 'react';

export default function Newtwentytwo() {
  const [sectionStates, setSectionStates] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  const toggleSection = (section) => {
    setSectionStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div>
      <div className='newtwentytwomaintop'>
        <h6>Frequently Asked Questions</h6>
        <img alt=' ' src="./media/124.svg" />
        
      </div>
      <div className='newtwentytwomain'>

        <div className='newtwentytwomainleft'>
          <img alt=' ' src="./media/123.svg" />
        </div>
        
        <div className='newtwentytwomainright'>
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className='newtwentytwomainright1'>
              <div className='newtwentytwomainright10'>
                <h1>What kind of memory does Microhost offer?</h1>
                <img
                  alt=' '
                  src={sectionStates[`section${index}`] ? "./media/122.svg" : "./media/121.svg"}
                  onClick={() => toggleSection(`section${index}`)}
                />
              </div>
              {sectionStates[`section${index}`] && (
                <div>
                  <p>
                    DDR4 memory with the highest frequency can provide your application stacks with the extra power they need
                    to run at peak performance. This is an important factor to consider when choosing a cloud provider,
                    as faster and more powerful memory can significantly improve the performance and speed of your applications.
                  </p>
                  <img
                    alt=' '
                    src="./media/0.svg"
                    onClick={() => toggleSection(`section${index}`)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
