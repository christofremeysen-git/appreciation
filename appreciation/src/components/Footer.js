import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bottom-0 bg-customLightBlue w-full p-5 z-10">
      <p className="flex text-customDarkIndigo dark:text-customDarkIndigo">
        <span className="pr-3 pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </span>
        <span>
          Meer over mijn professionele ervaring, vind je op mijn{" "}
          <a href="https://be.linkedin.com/in/christofremeysen" alt="LinkedIn">
            LinkedIn pagina
          </a>{" "}
          <span className="pl-3">🚀</span>
        </span>
      </p>
      <div className="flex items-center my-8">
        {/* <img
          src="https://a.storyblok.com/f/51376/3856x824/fea44d52a9/colored-full.png"
          alt="Storyblok Logo"
          className="w-48 m-4"
        /> */}
      </div>
    </footer>
  );
};

export default Footer;
