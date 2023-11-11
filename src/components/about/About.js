import React, {useState} from 'react'
import profilepic from '../../assets/profilepic.jpg'
import './about.css';
import ScrollTrigger from 'react-scroll-trigger';


const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setIsVisible(true)}>
      <div className={`about-container ${isVisible ? 'visible' : ''}`} id='about'>
        <div className='about-title'>
          <span className='about-title-number'>01.</span>
          <span className='about-title-name'>About Me</span>
          <hr className='about-title-line'></hr>
        </div>
        <div className='about-description'>
          <div className='about-description-text'>
            <div className='about-description-info'>
              <span className='about-description-info-element'>
                Hello! My name is Arjun and I am a high school senior from Washington State! I love the problem solving and logical nature of programming, and throughout high school, I’ve messed around in a ton of different aspects of the field. From competitive programming competitions to teaching Python to creating websites, I am exploring a ton of different avenues. I hope to study Computer Science in college next year and continue my exposure to the field, and hopefully find a more specific area to pursue for a career.
              </span>
              <p></p>
              <span className='about-description-info-element'>
                At the moment, I am working as a part-time developer for RetailRealm, specifically designing UI on their XStreamPOS product. I did an internship at the company during my junior year summer, and I really enjoyed it and learned a lot, and they were happy enough with my performance that they offered me a part-time position during the school year.
              </span>
              <p></p>
              <span className='about-description-info-element'>
                When I’m not coding, I love gaming and playing chess with my friends (Minecraft is my favorite game all-time and I play the London System — sorry to all the chess players). I also love playing basketball, and as a standard PNW kid, love hiking the many beautiful trails we have around here. I’m currently also trying to learn how to cook so I don’t starve in college :)
              </span>
            </div>
            <div className='about-description-tech'>
              Here are a few technologies I've worked with recently:
              <div className='tech-list-container'>
                <ul className='list'>
                  <li className='tech-list-element'>React</li>
                  <li className='tech-list-element'>C++</li>
                  <li className='tech-list-element'>CSS</li>
                </ul>
                <ul className='list'>
                  <li className='tech-list-element'>Python</li>
                  <li className='tech-list-element'>Java</li>
                  <li className='tech-list-element'>Ruby on Rails</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='about-description-image-container'>
            <img className='about-description-image' src={profilepic} alt='hola'/>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  )
}

export default About