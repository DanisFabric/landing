import React from "react";
import Card from "./Card";
import Slider from "react-slick";

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  }
  return (
    <div className="w-full bg-[#E9F8F3B2] py-[50px]">
      <div className="max-w-[1480px] m-auto p-5">
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </div>
    </div>
  );
};

export default Courses;
