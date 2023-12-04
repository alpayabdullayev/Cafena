import React from 'react'
import PageTitle from '../../components/PageTitle'
import AboutUs from '../../components/AboutUs'
import AboutCheckBox from '../../components/AboutUsCheckBox'

import OurChef from '../../components/OurChef'
import Hoisingcity from '../../components/HoisingCityBox'
import ChooseUs from '../../components/ChooseUs'

function About() {
  return (
    <>
    <PageTitle title={"About"}/>
    <AboutUs checkbox={<AboutCheckBox/>}/>
    <ChooseUs/>
    <Hoisingcity/>
    <OurChef linkvalue={"#aboutus"}/>
    </>
  )
}

export default About