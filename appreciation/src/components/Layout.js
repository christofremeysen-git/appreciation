import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styling/App.css";
import "../styling/index.css";

function Layout({ children }) {
  return (
    <div className="block">
      <Header />
      <div className="pt-24">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
