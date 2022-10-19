import React from "react";
import Slider from "react-slick";
import "./Slides.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/Mua-1-tang-1-PC.jpg";
import image2 from "../../assets/images/Mix-Match-89k-PC.jpg";
import image3 from "../../assets/images/Giam-70-pizza-thu-2-PC.jpg";
import image4 from "../../assets/images/BOGOSUN-PC.jpg";
import image5 from "../../assets/images/Meat-Free-Menu-PC.jpg";
import image6 from "../../assets/images/4-buoc-dat-ngay-PC.jpg";

function Slides() {
  var settings = {
    arrows: true,
    centerMode: true,
    centerPadding: "80px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1600,
    cssEase: "ease-out",

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "100px",
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          speed: 1600,
          cssEase: "ease-out",
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="py-8 px-4">
        <Link to="/Khuyenmai">
          <img className="h-[calc(100vh-136px)] w-[100%]" src={image1} alt="" />
        </Link>
      </div>
      <div className="py-8 px-4">
        <Link to="/Khuyenmai">
          <img className="h-[calc(100vh-136px)] w-[100%]" src={image2} alt="" />
        </Link>
      </div>
      <div className="py-8 px-4">
        <Link to="/Khuyenmai">
          <img className="h-[calc(100vh-136px)] w-[100%]" src={image3} alt="" />
        </Link>
      </div>
      <div className="py-8 px-4">
        <Link to="/Khuyenmai">
          <img className="h-[calc(100vh-136px)] w-[100%]" src={image4} alt="" />
        </Link>
      </div>
      <div className="py-8 px-4">
        <Link to="/Khuyenmai">
          <img className="h-[calc(100vh-136px)] w-[100%]" src={image5} alt="" />
        </Link>
      </div>
      <div className="py-8 px-4">
        <Link to="/Khuyenmai">
          <img className="h-[calc(100vh-136px)] w-[100%]" src={image6} alt="" />
        </Link>
      </div>
    </Slider>
  );
}

export default Slides;
