import { storyblokEditable } from "@storyblok/react";
import { useState } from "react";
import Slider from "react-slick";

export default function Sliderslick({ blok }) {
  var settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [fetched, setFetched] = useState(false);

  return (
    <div className="flex justify-center">
      {/* <button onClick={() => setFetched(true)}>Button</button> */}
      <div
        {...storyblokEditable(blok)}
        id="test"
        key={blok._uid}
        className="container slider-load w-72 sm:w-4/5 bg-customLightGreen rounded-3xl p-10"
      >
        <Slider
          {...settings}
          className="w-5/6 m-auto"
          onReInit={() => setFetched(true)}
        >
          {fetched ? (
            blok.slides.map((child, index) => (
              <img
                src={child.image.filename}
                alt={child.image.alt}
                className="object-scale-down max-h-56 sm:max-h-96"
                key={index}
              />
            ))
          ) : (
            <div>No images fetched...</div>
          )}
        </Slider>
      </div>
    </div>
  );
}
