import React, { useState } from 'react';
import './index.scss';

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
            {['DESCRIPTION', 'Additional information', 'REVIEWS'].map((tab, index) => (
              <button
                key={index}
                className={`tabs ${index === activeTab ? 'active' : ''}`}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className={`content ${activeTab === 0 ? 'active-content' : ''}`}>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor
              sit amet, consecteturadipiscing elit, sed do eiusmod temp incid idunt ut labore et
              dolore magna aliqua. nisi ut aliquip ex ea commodo consat. Duis aute irure dolor in
              reprehenderit n volup tate velit esse cillum dolore euy elit ale ruin irure dolor in.
              Adipisci accusata interpretaris nec ea. In etiam neglegentur has, his iudico vidisse
              feugiat id. An nibh homero pri, mutat feugait salutandi id mei, mentitum patrioque sea
              id. Erat minimum vulputate eu quo. Lorem ipsum dolor sit amet, ne quando feugait eos,
              nisl inciderint per et.
            </p>
          </div>
          <div className={`content ${activeTab === 1 ? 'active-content' : ''}`}>
            <p>WEIGHT 2 kg</p>
            <p>DIMENSIONS 30 × 2 × 20 cm</p>
          </div>
          <div className={`content ${activeTab === 2 ? 'active-content' : ''}`}>
            <h1>REVIEWS</h1>
            <p>There are no reviews yet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
