import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <section className='' id='notFound'>
        <div className="bg-img">
            <div className="divcenter">
            <h1>404</h1>
        <h3>Page not found</h3>
          <Link style={{border:"1px solid black",padding:"20px"}} to={'/'} class="page-btn btndida">Back To Home Page</Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default NotFound