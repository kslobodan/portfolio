import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Nemanja Milojević",
    description: "Lead Front-End Developer at Xoran Technologies",
    review: `Highly skilled and efficient colleague who is always ready to help. A valuable asset to any development team.`,
  },
  {
    avatar: AVTR2,
    name: "Milan Škarić",
    description: "Co-Founder and CEO at ENON Solutions",
    review: `He is a true professional - reliable, organizeds. His attention to detail, creativity and outside-the-box thinking added real value to our team's work.`,
  },
  {
    avatar: AVTR3,
    name: "Petar Della Pietra",
    description: "Lead SDE at Akvelon, Inc. | Microsoft",
    review: `Collaborating with this software developer was a great experience. Not only were they technically proficient, but also an excellent communicator, a problem solver, and a team player. Highly recommended!`,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, description, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h3 className="client__name">{name}</h3>
              <h5>{description}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
