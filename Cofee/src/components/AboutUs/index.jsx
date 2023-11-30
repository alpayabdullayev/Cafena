import React from "react";
import "./index.scss";
const AboutUs = () => {
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
              srcset=""
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
              Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut
              quam quis quam venenatis fringilla. Morbi vestibulum id tellus
              mmodo mattis. Aliquam erat volutpat. Aenean accumsan id mi nec
              semper. Lorem ipsum.
            </p>
          </div>
        </div>


        </div>
      </section>
    </>
  );
};

export default AboutUs;
