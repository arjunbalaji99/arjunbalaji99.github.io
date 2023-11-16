import './header.css';
import React, {useState, useEffect} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ScrollTrigger from 'react-scroll-trigger';
import resume from '../../assets/resume.pdf'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  
    return () => {
      clearTimeout(timeout1);
    };
  }, []);

  return (
    <ScrollTrigger onEnter={() => setIsVisible(true)}>
      <div className={`header-container ${isVisible ? 'visible' : ''}`}>
        <div className='brand-container'>AB</div>
        <div className='navbar-container'>
          <div className='navbar-element'>
            <span className='navbar-number'>01.</span>
            <span className='navbar-tag'><AnchorLink className='navbar-tag-a' href='#about'>About</AnchorLink></span>
          </div>
          <div className='navbar-element'>
            <span className='navbar-number'>02.</span>
            <span className='navbar-tag'><AnchorLink className='navbar-tag-a' href='#experience'>Experience</AnchorLink></span>
          </div>
          <div className='navbar-element'>
            <span className='navbar-number'>03.</span>
            <span className='navbar-tag'><AnchorLink className='navbar-tag-a' href='#projects'>Projects</AnchorLink></span>
          </div>
          <div className='navbar-element'>
            <span className='navbar-number'>04.</span>
            <span className='navbar-tag'><AnchorLink className='navbar-tag-a' href='#contact'>Contact</AnchorLink></span>
          </div>
          <button className='navbar-button'><a className='navbar-tag-a' href={resume} target="_blank" rel='noreferrer'>Resume</a></button>
        </div>
        <div className='mobilemenu-container'>
          <div className="icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <span>&#9776;</span>
            ) : (
              <span>&#10006;</span>
            )
            }
          </div>
          {isMobileMenuOpen ? (
            <div></div>
          ) : (
            <div className='mobilemenu-elements'>
              <div className='menu-element' onClick={toggleMobileMenu}>
                <span className='navbar-number'>01.</span>
                <span className='navbar-tag'><AnchorLink className='navbar-tag-a' href='#about'>About</AnchorLink></span>
              </div>
              <div className='menu-element' onClick={toggleMobileMenu}>
                <span className='navbar-number'>02.</span>
                <span className='navbar-tag'><AnchorLink className='navbar-tag-a' href='#experience'>Experience</AnchorLink></span>
              </div>
              <div className='menu-element' onClick={toggleMobileMenu}>
                <span className='navbar-number'>03.</span>
                <span className='navbar-tag'><AnchorLink className='navbar-tag-a' href='#projects'>Projects</AnchorLink></span>
              </div>
              <div className='menu-element' onClick={toggleMobileMenu}>
                <span className='navbar-number'>04.</span>
                <span className='navbar-tag'><AnchorLink className='navbar-tag-a' href='#contact'>Contact</AnchorLink></span>
              </div>
              <button className='menu-button' onClick={toggleMobileMenu}><a className='navbar-tag-a' href={resume} target="_blank" rel='noreferrer'>Resume</a></button>
            </div>
          )
          }
        </div>
      </div>
    </ScrollTrigger>
  )
}

export default Header