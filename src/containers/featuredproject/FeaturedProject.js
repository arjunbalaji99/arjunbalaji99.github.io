import React, {useState} from 'react'
import './featuredproject.css';
import TechnologyDesc from '../technologydesc/TechnologyDesc';
import ScrollTrigger from 'react-scroll-trigger';

const FeaturedProject = ( {label} ) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setIsVisible(true)}>
      <div className={`featuredproject-container ${label.leftBasedImage ? 'left' : ''} ${isVisible ? 'visible' : ''}`}>
        <div className='featuredproject-image-container'>
          <a href={label.githublink} target="_blank" rel='noreferrer'><img src={label.image} alt='project' className='featuredproject-image' /></a>
        </div>
        <div className='featuredproject-info'>
          <span className='featuredproject-message'>Featured Project</span>
          <span className='featuredproject-title'>{label.title}</span>
          <div className='featuredproject-description'>
            {label.description}
          </div>
          <div className='featuredproject-technologies'>
            {label.technologies.map((technology, index) => (
              <TechnologyDesc label={technology} leftAligned={false} />
            ))}
          </div>
          <div className='featuredproject-links'>
            <a className='links-svg-a' href={label.githublink} target="_blank" rel='noreferrer'><svg className='links-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M6.315 6.176c-.25-.638-.24-1.367-.129-2.034a6.77 6.77 0 0 1 2.12 1.07c.28.214.647.283.989.18A9.343 9.343 0 0 1 12 5c.961 0 1.874.14 2.703.391c.342.104.709.034.988-.18a6.77 6.77 0 0 1 2.119-1.07c.111.667.12 1.396-.128 2.033c-.15.384-.075.826.208 1.14C18.614 8.117 19 9.04 19 10c0 2.114-1.97 4.187-5.134 4.818c-.792.158-1.101 1.155-.495 1.726c.389.366.629.882.629 1.456v3a1 1 0 0 0 2 0v-3c0-.57-.12-1.112-.334-1.603C18.683 15.35 21 12.993 21 10c0-1.347-.484-2.585-1.287-3.622c.21-.82.191-1.646.111-2.28c-.071-.568-.17-1.312-.57-1.756c-.595-.659-1.58-.271-2.28-.032a9.081 9.081 0 0 0-2.125 1.045A11.432 11.432 0 0 0 12 3c-.994 0-1.953.125-2.851.356a9.08 9.08 0 0 0-2.125-1.045c-.7-.24-1.686-.628-2.281.031c-.408.452-.493 1.137-.566 1.719l-.005.038c-.08.635-.098 1.462.112 2.283C3.484 7.418 3 8.654 3 10c0 2.992 2.317 5.35 5.334 6.397A3.986 3.986 0 0 0 8 17.98l-.168.034c-.717.099-1.176.01-1.488-.122c-.76-.322-1.152-1.133-1.63-1.753c-.298-.385-.732-.866-1.398-1.088a1 1 0 0 0-.632 1.898c.558.186.944 1.142 1.298 1.566c.373.448.869.916 1.58 1.218c.682.29 1.483.393 2.438.276V21a1 1 0 0 0 2 0v-3c0-.574.24-1.09.629-1.456c.607-.572.297-1.568-.495-1.726C6.969 14.187 5 12.114 5 10c0-.958.385-1.881 1.108-2.684c.283-.314.357-.756.207-1.14Z"/></g></svg></a>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  )
}

export default FeaturedProject;