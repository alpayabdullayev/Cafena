import React from 'react'
import PageTitle from '../../components/PageTitle'
import AboutUs from '../../components/AboutUs'
import AboutCheckBox from '../../components/AboutUsCheckBox'
import ChooseUs from '../../components/ChooseUs'
import Hoisingcity from '../../components/HoisingCityBox'

function About() {
  return (
    <>
    <PageTitle title={"About"}/>
    <AboutUs checkbox={<AboutCheckBox/>}/>
    <ChooseUs/>
    <Hoisingcity/>
    </>
  )
}

export default About