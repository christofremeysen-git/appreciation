import React from "react";
import Header from "./Header";
import "../styling/App.css";
import "../styling/index.css";

function Layout({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-customDarkBlack transition duration-1000">
      <Header />
      <div className="mt-20">{children}</div>
    </div>
  );
}

// const Layout = ({ children }) => (
//   <div className="flex items-center justify-center min-h-screen dark:bg-customDarkBlack transition duration-1000">
//     <Header />
//     <div className="mt-20">{children}</div>
//   </div>
// );

export default Layout;
