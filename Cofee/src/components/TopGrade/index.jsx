import React from 'react'
import './index.scss'
import Title from '../Title'

const TopGrade = () => {
    return (
        <section id='topGrade'>
            <div class="container">
                <div className='gradebox'>
                    <Title title={"TOP GRADE"} titleh1={"WORLD TOP GRADE"}/>
                    <br></br>
                    <br></br>
{/* ----------------------------------------------------------------------- */}
                    <div className='coffe-sort row'>
                        <div className='Americano-Grade col-12 col-xs-6 col-md-4 col-lg-3'>
                            <span className='one'>01</span>
                            <img className='Ag' src="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-2-1.jpeg" alt="" />
                            <h2 className='Americano'>Americano Grade</h2>
                            <p className='p-tag3'>Curabitur semper erat a lacusey
                                consequat, sit amet quam</p>

                        </div>
                        <div className='Arebica-Green col-12 col-xs-6 col-md-4 col-lg-3'>
                            <span className='two'>02</span>
                            <img className='Ag2' src="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-2-2.jpeg" alt="" />
                            <h2 className='Arebica'>Arebica Green</h2>
                            <p className='p-tag4'>Curabitur semper erat a lacusey
                                consequat, sit amet quam</p>


                        </div>
                        <div className='Mixed-Rosted col-12 col-xs-6 col-md-4 col-lg-3'>
                            <span className='three'>03</span>

                            <img className='Mr' src="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-2-3.jpeg" alt="" />
                            <h2 className='Mixed'>Mixed Rosted</h2>
                            <p className='p-tag5'>Curabitur semper erat a lacusey
                                consequat, sit amet quam</p>

                        </div>
                        <div className='Robasta-Rosted col-12 col-xs-6 col-md-4 col-lg-3'>
                            <span className='four'>04</span>
                            <img className='Rr' src="https://xpressrow.com/html/cafena/cafena/assets/images/top-grade/tg-2-4.jpeg" alt="" />
                            <h2 className='Robasta'>Robasta Rosted</h2>
                            <p className='p-tag6'>Curabitur semper erat a lacusey
                                consequat, sit amet quam</p>
                        </div>


                    </div>
                </div>
            </div>
            <img className='bgImgTopGrade1' src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/top-grade-shape-2-1.png" alt="" />
            <img className='bgImgTopGrade2' src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/top-grade-shape-2-2.png" alt="" />

        </section>
    )
}

export default TopGrade