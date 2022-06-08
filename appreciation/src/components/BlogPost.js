import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const BlogPost = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
        <div className="blog leading-relaxed text-xl text-left text-gray-800 drop-cap">
          {render(blok.text)}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
