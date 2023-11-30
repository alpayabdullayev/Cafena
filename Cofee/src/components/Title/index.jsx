import React from 'react'
import "./index.scss"
const Title = ({title,titleh1}) => {
  return (
    <>
    <div className="sectionTitle">
        <h5 className='sectionTitleH5'>{title}</h5>
        <h2 className='sectionTitleH2'>{titleh1}</h2>
    </div>
    </>
  )
}

export default Title
