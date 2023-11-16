import React from 'react'
import './tab.css';

const Tab = ( {label, onClick, isActiveTab} ) => {
  return (
    <div className='tab-container'>
      {isActiveTab ? (
        <button className='tab-button tab-button-active' onClick={onClick}>
          {label}
        </button>
      ) : (
        <button className='tab-button' onClick={onClick}>
          {label}
        </button>
      )
      }
    </div>
    
  )
}

export default Tab;