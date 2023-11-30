import React from 'react'
import "./index.scss"

const PageTitle = ({title}) => {
  return (
    <>
    <div className="sectionTitleBanner">
    <div className="overlayBanner"></div>
    <div className="bannerTitle">
      <h2>{title}</h2>
    </div>
   
        <div className="shape1">
          <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-1.png" alt="" />
        </div>
        <div className="shape2">
          <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png" alt="" />
        </div>
    </div>
    </>
  )
}

export default PageTitle