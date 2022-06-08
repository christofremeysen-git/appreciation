import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Teaser = ({ blok }) => {
  return (
    <div
      className="content bg-white-half px-6 mt-8 sm:mt-16"
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      <h1>{blok.headline}</h1>
      <div className="flex place-items-center">
        <img
          src={blok.image.filename}
          alt={blok.image.alt}
          className="profile float-left -ml-20"
        />
        <div className="-ml-14">{render(blok.description)}</div>
      </div>
    </div>
  );
};

export default Teaser;
