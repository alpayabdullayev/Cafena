import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const TestimonialContent = ({image,desc,profileImg,name,work}) => {
  return (

        <SwiperSlide>
          <span className="imgQ">
            <img
              src={image}
              alt=""
            />
          </span>
          <p>
            {desc}
          </p>
          <div class="author-info">
            <div class="profileImg">
              <img src={profileImg} alt="" />
            </div>
            <div class="content">
              <h4 class="name">{name}</h4>
              <span class="designation">{work}</span>
            </div>
          </div>
        </SwiperSlide>

  );
};

export default TestimonialContent;
