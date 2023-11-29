import React from "react";
import "./index.scss";
const AboutUs = () => {
  return (
    <>
      <section id="aboutus">
        <div className="container">
        <div className="coffe-man">
          <div className="images-coffe">
            <img className="coffe-image" 
              src="https://xpressrow.com/html/cafena/cafena/assets/images/about/about-img-2-2.png"
              alt=""
              srcset=""
            />

            <img
              src="https://xpressrow.com/html/cafena/cafena/assets/images/about/about-img-2-1.png"
              alt=""
            />

          </div>

          <div className="aboutus-context">
            <span className="sub-title-aboutus">ABOUTS US</span>
            <h2 className="yourname-text">
              ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN
            </h2>
            <br />
            <p className="p-tag">
              Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl
              suscipit ligula volutpat, a feugiat urna maximus. Cras massa
              nibhtincidunt.
            </p>
            <br />

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
