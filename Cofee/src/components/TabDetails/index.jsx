import React, { useState } from "react";
import "./index.scss";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section id="tabsSection">
      <div className="container">
        <div className="tabs-component">
          <div className="tabs-container">
            {["DESCRIPTION", "Additional information", "(04)REVIEWS"].map(
              (tab, index) => (
                <button
                  key={index}
                  className={`tabs ${index === activeTab ? "active" : ""}`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab}
                </button>
              )
            )}
          </div>
          <div className={`content ${activeTab === 0 ? "active-content" : ""}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est,
            </p>
          </div>
          <div className={`content ${activeTab === 1 ? "active-content" : ""}`}>
            <ul class="row" style={{border:"1px solid #ddd"}}>
              <li className="col-6" style={{border:"1px solid #ddd",padding:"10px"}}>Weight</li>
              <li className="col-6" style={{border:"1px solid #ddd" ,padding:"10px"}}>1.4 oz</li>
              <li className="col-6" style={{border:"1px solid #ddd" ,padding:"10px"}}>Dimensions</li>
              <li className="col-6" style={{border:"1px solid #ddd" ,padding:"10px"}}>62 × 56 × 12 in</li>
              <li className="col-6" style={{border:"1px solid #ddd" ,padding:"10px"}}>Size</li>
              <li className="col-6" style={{border:"1px solid #ddd" ,padding:"10px"}}>XL, XXL, LG, SM, MD</li>
              <li className="col-6" style={{border:"1px solid #ddd" ,padding:"10px"}}>Fabric</li>
              <li className="col-6" style={{border:"1px solid #ddd" ,padding:"10px"}}>Cotton, Silk &amp; Synthetic</li>
              <li className="col-6" style={{border:"1px solid #ddd" ,padding:"10px"}}>Warranty</li>
              <li className="col-6" style={{border:"1px solid #ddd" ,padding:"10px"}}>3 Months</li>
            </ul>
          </div>
          <div className={`content ${activeTab === 2 ? "active-content" : ""}`}>
            <h1>REVIEWS</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
