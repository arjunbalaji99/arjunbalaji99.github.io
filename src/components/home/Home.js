import React, {useState, useEffect} from 'react'
import './home.css';

const Home = () => {
  const [introClassVisible, setIntroClassVisible] = useState(false);
  const [nameClassVisible, setNameClassVisible] = useState(false);
  const [overviewClassVisible, setOverviewClassVisible] = useState(false);
  const [descClassVisible, setDescClassVisible] = useState(false);
  const [iconsClassVisible, setIconsClassVisible] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setIntroClassVisible(true);
    }, 2000);
  
    const timeout2 = setTimeout(() => {
      setNameClassVisible(true);
    }, 2500);

    const timeout3 = setTimeout(() => {
      setOverviewClassVisible(true);
    }, 3000);

    const timeout4 = setTimeout(() => {
      setDescClassVisible(true);
    }, 3500);

    const timeout5 = setTimeout(() => {
      setIconsClassVisible(true);
    }, 4000);
  
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
    };
  }, []);

  return (
    <div className='home-container'>
      <div className={`home-text-element intro-home-text-container ${introClassVisible ? 'visible' : ''}`}>
        <span className='intro-home-text-element'>Hi, my name is</span>
      </div>
      <div className={`home-text-element name-home-text-container ${nameClassVisible ? 'visible' : ''}`}>
        <span className='name-home-text-element'>Arjun Balaji.</span>
      </div>
      <div className={`home-text-element overview-home-text-container ${overviewClassVisible ? 'visible' : ''}`}>
        <span className='overview-home-text-element'>I like coding stuff.</span>
      </div>
      <div className={`home-text-element description-home-text-container ${descClassVisible ? 'visible' : ''}`}>
        <span className='description-home-text-element'>I'm a high school student from Washington who loves coding, gaming, and playing basketball. I'm currently working as a developer at RetailRealm, building their XStreamPOS product Tablet UI.</span>
      </div>
      <div className={`links-container ${iconsClassVisible ? 'visible' : ''}`}>
        <a className='links-svg-a' href='https://github.com/arjunbalaji99' target="_blank" rel='noreferrer'><svg className='links-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M6.315 6.176c-.25-.638-.24-1.367-.129-2.034a6.77 6.77 0 0 1 2.12 1.07c.28.214.647.283.989.18A9.343 9.343 0 0 1 12 5c.961 0 1.874.14 2.703.391c.342.104.709.034.988-.18a6.77 6.77 0 0 1 2.119-1.07c.111.667.12 1.396-.128 2.033c-.15.384-.075.826.208 1.14C18.614 8.117 19 9.04 19 10c0 2.114-1.97 4.187-5.134 4.818c-.792.158-1.101 1.155-.495 1.726c.389.366.629.882.629 1.456v3a1 1 0 0 0 2 0v-3c0-.57-.12-1.112-.334-1.603C18.683 15.35 21 12.993 21 10c0-1.347-.484-2.585-1.287-3.622c.21-.82.191-1.646.111-2.28c-.071-.568-.17-1.312-.57-1.756c-.595-.659-1.58-.271-2.28-.032a9.081 9.081 0 0 0-2.125 1.045A11.432 11.432 0 0 0 12 3c-.994 0-1.953.125-2.851.356a9.08 9.08 0 0 0-2.125-1.045c-.7-.24-1.686-.628-2.281.031c-.408.452-.493 1.137-.566 1.719l-.005.038c-.08.635-.098 1.462.112 2.283C3.484 7.418 3 8.654 3 10c0 2.992 2.317 5.35 5.334 6.397A3.986 3.986 0 0 0 8 17.98l-.168.034c-.717.099-1.176.01-1.488-.122c-.76-.322-1.152-1.133-1.63-1.753c-.298-.385-.732-.866-1.398-1.088a1 1 0 0 0-.632 1.898c.558.186.944 1.142 1.298 1.566c.373.448.869.916 1.58 1.218c.682.29 1.483.393 2.438.276V21a1 1 0 0 0 2 0v-3c0-.574.24-1.09.629-1.456c.607-.572.297-1.568-.495-1.726C6.969 14.187 5 12.114 5 10c0-.958.385-1.881 1.108-2.684c.283-.314.357-.756.207-1.14Z"/></g></svg></a>
        <a className='links-svg-a' href='https://www.instagram.com/arjunbalaji10/' target="_blank" rel='noreferrer'><svg className='links-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4Zm0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06c-2.717 0-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153a4.905 4.905 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428c-.048-1.066-.06-1.405-.06-4.122c0-2.717.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772a4.897 4.897 0 0 1 1.772-1.153c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2Z"/></svg></a>
        <a className='links-svg-a' href='mailto:arjunbalaji08@gmail.com' target="_blank" rel='noreferrer'><svg className='links-svg' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M32 6v20c0 1.135-.865 2-2 2h-2V9.849l-12 8.62l-12-8.62V28H2c-1.135 0-2-.865-2-2V6c0-.568.214-1.068.573-1.422A1.973 1.973 0 0 1 2 4h.667L16 13.667L29.333 4H30c.568 0 1.068.214 1.427.578c.359.354.573.854.573 1.422z"/></svg></a>
      </div>
    </div>
  )
}

export default Home