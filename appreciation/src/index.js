import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./styling/index.css";
import App from "./App";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Image from "./components/Image";
import Page from "./components/Page";
import Text from "./components/Text";
import Grid from "./components/Grid";
import Teaser from "./components/Teaser";
import Sliderslick from "./components/Sliderslick";
import BlogPost from "./components/BlogPost";

storyblokInit({
  accessToken: "RcdWpyHYspaD2nXljeu6zwtt",
  use: [apiPlugin],
  components: {
    grid: Grid,
    image: Image,
    page: Page,
    post: BlogPost,
    sliderslick: Sliderslick,
    teaser: Teaser,
    text: Text,
  },
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
