import React from "react";
import "./index.scss";
import { PiArrowRightThin } from "react-icons/pi";

const ChooseUs = () => {
  return (
    <>
      <section id="why-choose-us">
        <div class="container">
          <span className="sub-title-chooseus">WHY CHOOSE US</span>
          <div className="your-city">
            <h2 className="title-yourcity">
              WE ARE PROVIDE BEST SERVICE <br />
              IN YOUR CITY
            </h2>
          </div>
          <br />
          <br />
          <div className="testy-coffee">
            <div className="emrah">
              <div className="emrahimg">
                <img
                  src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-1.png"
                  alt=""
                />
                <span></span>
              </div>
              <h2 className="coffee-recipe">TESTY COFFEE RECIPE</h2>
              <p>
                Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis.
                Aliquam erat volutpat. Aenean accumsany.
              </p>
              <button>
                <PiArrowRightThin className="right-direction" />
              </button>
            </div>

            <div className="alpay">
              <div className="alpayimg">
                <img
                  src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-2.png"
                  alt=""
                />
                <span></span>
              </div>
              <h2 className="coffee-recipe">Great Location</h2>
              <p>
                Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis.
                Aliquam erat volutpat. Aenean accumsany.
              </p>
              <button>
                <PiArrowRightThin className="right-directionone" />
              </button>
            </div>

            <div className="ahmed">
              <div className="ahmedimg">
                <img
                  src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/wcu-1.png"
                  alt=""
                />
                <span></span>
              </div>
              <h2 className="coffee-recipe">Professional Chef</h2>
              <p>
                Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis.
                Aliquam erat volutpat. Aenean accumsany.
              </p>
              <button>
                <PiArrowRightThin className="right-directiontwo" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
