import React, { useState } from "react";
import Title from "../Title";
import { v4 as uuidv4 } from 'uuid';
import "./index.scss";
import SpecialCard from "../SpecialCard";
import useFetch from "../../hooks/useFetch";

const SpecialMenu = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const url = "  http://localhost:3000/products";

  const Callback = (data) => {
    if (!status) {
      console.log(data);
      setData(data);
      setStatus(true);
      setIsLoading(false);
    }
  };

  useFetch(url, Callback);

  return (
    <>
      <section id="specialMenu">
        <div className="container">
          <Title title={"SPECIAL MENU"} titleh1={"CAFENA POPULAR MENU"} />

          <div className="specialMenuCards ">
          {isLoading ? (
          <p>Loading...</p>
        ) : (
         data && data.map((item) => (
            <>
              <SpecialCard key={uuidv4()}  {...item} />
            </>
          ))
        )}
          </div>
        </div>
        <img className="img-bg-context" src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/menu-shape-1.png" alt="" />
        <img className="img-bg-context-2" src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/menu-shape-4.png" alt="" />
      </section>
    </>
  );
};

export default SpecialMenu;
