import React from 'react'
import "./index.scss"
import Footer from '../../layout/Footer'
import PageTitle from '../../components/PageTitle'
import FAQitem from '../../components/FAQitem'

function FAQ() {
    
    return (
        <>
            <PageTitle title={"FAQ"} />
            <section id='faq'>
                <div className="container">
                    <div className="faqbox">
                        <FAQitem title="How does this work?" content="Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket."/>
                        <FAQitem title="Some menus are missing on a coffee shop page?" content="Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket." />
                        <FAQitem title="Do any of your cheeses contain enzymes derived from animal sources?" content="Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket." />
                        <FAQitem title="Are your menu prices the same as those at the Coffee house?" content="Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket." />
                        <FAQitem title="Are your doughs vegan or vegetarian friendly?" content="Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket." />

                    </div>
                </div>
            </section>
            <Footer linkvalue={"#faq"} />
        </>
    )
}

export default FAQ