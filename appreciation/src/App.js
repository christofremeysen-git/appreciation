import "./styling/App.css";
import "./styling/main.css";
import "./styling/index.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-customDarkBlack transition duration-1000">
      <Header />
      <h1 className="text-customDarkGreen text-5xl">React Dark mode</h1>
    </div>
  );
}
