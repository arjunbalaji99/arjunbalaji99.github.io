import React, {useState} from 'react'
import './project.css'
import FeaturedProject from '../../containers/featuredproject/FeaturedProject'
import OtherProject from '../../containers/otherproject/OtherProject'
import hexapawnprojectimage from '../../assets/vsc.jpg'
import calculatorprojectimage from '../../assets/calculator.png'
import ScrollTrigger from 'react-scroll-trigger';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const featuredprojects = [
    { 
      title: 'Hexapawn',
      description: `Terminal-based game for the chess variant "Hexapawn." Incorporates an AI that improves as the user plays the game, eventually becoming unbeatable.`,
      githublink: 'https://github.com/arjunbalaji99/hexapawnprojectterminal',
      technologies: ['Python'],
      image: hexapawnprojectimage,
      leftBasedImage: true
    },
    { 
      title: 'Calculator',
      description: `Moderately advanced calculator app coded and designed from scratch.`,
      githublink: 'https://github.com/arjunbalaji99/calculator',
      technologies: ['Java', 'Swing'],
      image: calculatorprojectimage,
      leftBasedImage: false
    },
  ]

  const otherprojects = [
    {
      title: 'Youtube Clone',
      description: `Youtube Clone made while learning HTML/CSS`,
      githublink: 'https://github.com/arjunbalaji99/youtube-clone',
      technologies: ['HTML', 'CSS', 'Flexbox'],
    },
    {
      title: 'Recipe Web Scraper',
      description: `Web scraper that can take a collection of 'allrecipes.com' pages and finds the most common ingridients among the recipes`,
      githublink: 'https://github.com/arjunbalaji99/recipewebscraper',
      technologies: ['Python', "Flask", "BeautifulSoup4"],
    },
    {
      title: 'Competitive Programming',
      description: `i wasted a concerning amount of time failing to solve competitive programming problems with the boys`,
      githublink: 'https://github.com/arjunbalaji99/competitiveprogramming',
      technologies: ['C++'],
    }
  ]

  return (
      <div className='projects-container' id='projects'>
        <ScrollTrigger onEnter={() => setIsVisible(true)}>
          <div className={`projects-title ${isVisible ? 'visible' : ''}`}>
            <span className='projects-title-number'>03.</span>
            <span className='projects-title-name'>Projects</span>
            <hr className='projects-title-line'></hr>
          </div>
        </ScrollTrigger>
        <div className='featured-projects-description'>
          {featuredprojects.map((featuredproject, index) => (
            <FeaturedProject label={featuredproject} />
          ))}
        </div>
        <ScrollTrigger onEnter={() => setIsVisible2(true)}>
          <div className={`other-projects-title ${isVisible2 ? 'visible' : ''}`}>Other Projects</div>
        </ScrollTrigger>
        <div className='other-projects-description'>
          {otherprojects.map((otherproject, index) => (
            <OtherProject label={otherproject} />
          ))}
        </div>
      </div>
  )
}

export default Projects