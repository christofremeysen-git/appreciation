import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }) => (
  <div
    className="flex py-1 mb-3 container mx-auto"
    {...storyblokEditable(blok)}
    key={blok._uid}
  >
    {blok.columns.map((nestedBlok) => (
      <div key={nestedBlok._uid} className="flex-auto px-6">
        <StoryblokComponent blok={nestedBlok} />
      </div>
    ))}
  </div>
);

export default Grid;
