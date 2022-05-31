import { storyblokEditable } from "@storyblok/react";
import "../styling/main.css";

const Image = ({ blok }) => {
  return (
    <div className="bg-white-half" {...storyblokEditable(blok)} key={blok._uid}>
      <figure>
        <img
          src={blok.image.filename}
          alt={blok.image.alt}
          className="w-full"
        />
        <figcaption>{blok.caption}</figcaption>
      </figure>
    </div>
  );
};

export default Image;
