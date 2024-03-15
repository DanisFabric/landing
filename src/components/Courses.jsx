import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import { courses } from "../data/Courses";

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  }
  return (
    <div className="w-full bg-[#E9F8F3B2] py-[50px]">
      <div className="max-w-[1480px] m-auto p-10">
        <h1 className="text-3xl font-bold py-5">Most Popular<span className="text-[#20B486]">Courses</span></h1>
        <p className="text-[#6D737A] font-thin mb-4">Various versions have evolved over the years, sometimes by accident,</p>
        <Slider {...settings}>
          { courses.map((course) => {
            return (
              <Card course={course} />
            );
          }) }
        </Slider>
      </div>
    </div>
  );
};

export default Courses;
