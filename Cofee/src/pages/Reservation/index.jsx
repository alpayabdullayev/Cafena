import React from 'react'
import PageTitle from '../../components/PageTitle'
import ReservationForm from '../../components/ReservationForm'

function Reservation() {
  return (
    <>
    <PageTitle title={"RESERVATION"}/>
    <section id='reservation'>
      <div className="container">
        <ReservationForm/>
      </div>
    </section>
    </>
  )
}

export default Reservation