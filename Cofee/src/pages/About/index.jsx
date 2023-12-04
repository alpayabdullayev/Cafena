import React from 'react'
import PageTitle from '../../components/PageTitle'
import AboutUs from '../../components/AboutUs'
import AboutCheckBox from '../../components/AboutUsCheckBox'
import ChooseUs from '../../components/ChooseUs'
import OurChef from '../../components/OurChef'

function About() {
  return (
    <>
    <PageTitle title={"About"}/>
    <AboutUs checkbox={<AboutCheckBox/>}/>
    <ChooseUs/>
    <OurChef linkvalue={"#aboutus"}/>
    </>
  )
}

export default About