import React, { useState } from 'react';
import './experience.css';
import Tabs from '../../containers/tabs/Tabs';
import ScrollTrigger from 'react-scroll-trigger';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  const tabs = [
    { label: 'Intern @ RetailRealm', title: 'Intern @', company: 'RetailRealm', time: 'June 2023 - August 2023', 
      content: `<ul>
                  <li>Spearheaded development of new testing framework, reducing required testing labor by 80%</li>
                  <li>Worked with ruby on rails framework, selenium and cucumber for testing features</li>
                  <li>Designed product main dashboard that spanned 6 divisions, using UI/UX principles learnt from managing expert & online courses</li>
                  <li>Used AdobeXD heavily for design work, collaborated closely with CEO on design</li>
                  <li>Present progress and justify design decisions to the broader company in weekly meetings</li>
                </ul>`
    },
    { label: 'Part Time Developer @ RetailRealm', title: 'Part Time Developer @', company: 'RetailRealm', time: 'September 2023 - Present', 
      content: `<ul>
                  <li>Develop software for tablet version of product using Xamarin (C# framework)</li>
                  <li>Fix crucial bugs and add requested necessary features</li>
                  <li>Collaborate within 4 person engineering team, self-driving work with my boss thousands of miles away</li>
                </ul>`
      },
      { label: 'Volunteer Web Developer @ Asha for Education', title: 'Volunteer Web Developer @', company: 'Asha for Education', time: 'Feburary 2022 - June 2022', 
      content: `<ul>
                  <li>Updated the 10-year old webpage to a modern framework</li>
                  <li>Worked with React, Javascript, Docker and SQL</li>
                  <li>Worked on a team of 3 professional developers & other volunteers</li>
                  <li>Was able to contribute to a cause I was passionate about</li>
                </ul>`
    },
    { label: 'Software Developer @ School Robotics Team', title: 'Software Developer @', company: 'School Robotics Team', time: 'September 2020 - June 2022', 
      content: `<ul>
                  <li>Worked with a team of peers to design software for the FRC robotics competition our team competed in</li>
                  <li>Used WPILIB Software in combination with Java to develop</li>
                  <li>Navigated frustration, and stayed persistent through struggles</li>
                  <li>Learned extensively from the experienced upperclassmen on the team</li>
                  <li>Got exposure to using Git in large team enviornments</li>
                </ul>`
      }
  ]

  return (
    <ScrollTrigger onEnter={() => setIsVisible(true)}>
      <div className={`experience-container ${isVisible ? 'visible' : ''}`} id='experience'>
        <div className='experience-title'>
          <span className='experience-title-number'>02.</span>
          <span className='experience-title-name'>Experience</span>
          <hr className='experience-title-line'></hr>
        </div>
        <div className='experience-description'>
          <Tabs tabs={tabs} />
        </div>
      </div>
    </ScrollTrigger>
  )
}

export default Experience