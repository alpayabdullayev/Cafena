import React, { useState } from "react";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from 'uuid';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import {Autoplay, Navigation } from "swiper/modules";
import TestimonialContent from "../TestimonialContent";
import Title from "../Title";
import useFetch from "../../hooks/useFetch";

function Testimonial() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const url = "  http://localhost:3000/testimonials";

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
      <section id="testimonial">
        <div className="container">
          <div className="sliderSection">
            <Title title={"TESTIMONIAL"} titleh1={"OUR CUSTOMER REVIEW"} />
            <Swiper
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay,Navigation]}
              loop={true}
              className="mySwiper"
            >
              {data.map((item) => (
                        <SwiperSlide key={uuidv4()}>
                        <span className="imgQ">
                          <img
                            src={item.image}
                            alt=""
                          />
                        </span>
                        <p>
                          {item.desc}
                        </p>
                        <div class="author-info">
                          <div class="profileImg">
                            <img src={item.profileImg} alt="" />
                          </div>
                          <div class="content">
                            <h4 class="name">{item.name}</h4>
                            <span class="designation">{item.work}</span>
                          </div>
                        </div>
                      </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
