import React from "react";
import Header from "./Header";
import "../styling/App.css";
import "../styling/main.css";
import "../styling/index.css";

const Layout = ({ children }) => (
  <div className="flex items-center justify-center min-h-screen dark:bg-customDarkBlack transition duration-1000">
    <Header />
    <div className="mt-20">{children}</div>
  </div>
);

export default Layout;
