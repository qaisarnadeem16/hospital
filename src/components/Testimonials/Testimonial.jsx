import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic2 from "../../img/profile (1).jpg"
import profilePic1 from "../../img/profile (2).jpg"
import profilePic3 from "../../img/profile (3).jpg"
import profilePic4 from "../../img/profile (4).jpg"

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      " At Drbuttpolyclinic, services of all departments are the best. I don’t have enough words to appreciate the care they provide. Thank you for being so much at every junction of my treatment journey.",
    },
    {
      img: profilePic2,
      review:
        "The treatment provided by Drbuttpolyclinic is superb as well as fair in many ways. All services are cost-effective as much as I experienced during my short period of admission here.",
    },
    {
      img: profilePic3,
      review:
        " I don’t have enough words to appreciate the care they provide. Thank you for being so much at every junction of my treatment journey.",
    },
    {
      img: profilePic4,
      review:
        "The patient-friendly care that doctors provide here is something more than I ever would have thought. From nurses to paramedical staff everyone works as a team. I would love to recommend the hospital to others.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Patients always get </span>
        <span>Exceptional Treatment </span>
        <span>from us...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
