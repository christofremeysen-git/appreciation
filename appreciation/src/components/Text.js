import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Text = ({ blok }) => {
  return (
    <div
      className="flex items-center justify-center first-letter:text-customDarkBlack dark:text-white w-full"
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      <div className="container mx-auto py-6 space-y-3">
        {render(blok.text)}
      </div>
    </div>
  );
};
export default Text;
