import React from "react";
import "./index.scss";
import AboutCheckBox from "../AboutUsCheckBox";
const AboutUs = ({ text,checkbox }) => {
  return (
    <>
      <section id="aboutus">
        <div className="container">
          <div className="coffe-man row">
            <div className="images-coffe col-12 col-md-6">


              <img
                src="https://xpressrow.com/html/cafena/cafena/assets/images/about/about-img-2-1.png"
                alt=""
              />
              <img className="coffe-image"
                src="https://xpressrow.com/html/cafena/cafena/assets/images/about/about-img-2-2.png"
                alt=""
              />

            </div>

            <div className="aboutus-context col-xs-12  col-md-6">
              <span className="sub-title-aboutus">ABOUT US</span>
              <h2 className="yourname-text">
                ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN
              </h2>
              <br />
              <p className="p-tag">
                Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl
                suscipit ligula volutpat, a feugiat urna maximus. Cras massa
                nibhtincidunt.
              </p>

              <p className="p-tag2">
                {text}
              </p>
              <br></br>


            <div>
              {checkbox}
            </div>
            



            </div>
          </div>


        </div>
        <img className="imgAboutUsBg1" src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/about-shape-2-1.png" alt="" />
        <img className="imgAboutUsBg2" src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/about-shape-2-2.png " alt="" />
      </section>
    </>
  );
};

export default AboutUs;
