import { useStoryblok, StoryblokComponent } from "@storyblok/react";
import Layout from "./components/Layout";
import "./styling/App.css";
import "./styling/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  let slug =
    window.location.pathname === "/"
      ? "home"
      : window.location.pathname.replace("/", "");

  const story = useStoryblok(slug, { version: "draft" });
  if (!story || !story.content) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <StoryblokComponent blok={story.content} />
    </Layout>
  );
}
export default App;
