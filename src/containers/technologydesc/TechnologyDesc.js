import React from 'react'
import './technologydesc.css'

const TechnologyDesc = ( {label, leftAligned} ) => {
  return (
    <div className='technology-desc-container'>
      {leftAligned ? (
        <span className='technology-desc-text-right'>{label}</span>
      ) : (
        <span className='technology-desc-text-left'>{label}</span>
      )}
    </div>
  )
}

export default TechnologyDesc