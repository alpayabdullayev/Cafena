import React from 'react'
import "./index.scss"
import OurChefCard from '../OurChefCard'

function OurChef() {
  return (
    <section id='ourchef'>
      <div className="container">
        <div className="chefbox">
          <div className="cheftop">
            <span>OUR CHEF</span>
            <h2>MEET OUR PROFESSIONAL</h2>
          </div>
          <div className="chefbottom">
            <OurChefCard exp={"12 YEAR EXPERIENCE"} chefname={"RASALINA DE WILLAMSON"} cardimg={"https://xpressrow.com/html/cafena/cafena/assets/images/team/team-1.jpeg"} />
            <OurChefCard exp={"12 YEAR EXPERIENCE"} chefname={"RASALINA DE WILLAMSON"} cardimg={"https://xpressrow.com/html/cafena/cafena/assets/images/team/team-1.jpeg"} />
            <OurChefCard exp={"12 YEAR EXPERIENCE"} chefname={"RASALINA DE WILLAMSON"} cardimg={"https://xpressrow.com/html/cafena/cafena/assets/images/team/team-1.jpeg"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurChef