import { storyblokEditable } from "@storyblok/react";
import Slider from "react-slick";

export default function Sliderslick({ blok }) {
  var settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="flex justify-center">
      <div
        {...storyblokEditable(blok)}
        key={blok._uid}
        className="container w-72 sm:w-4/5 bg-customLightGreen rounded-3xl p-10"
      >
        <Slider {...settings} className="w-5/6 m-auto">
          {blok.slides
            ? blok.slides.map((child, index) => (
                <img
                  src={child.image.filename}
                  alt={child.image.alt}
                  className="object-scale-down max-h-56 sm:max-h-96"
                  key={index}
                />
              ))
            : alert("Image mistake")}
        </Slider>
      </div>
    </div>
  );
}
