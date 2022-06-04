// import useDarkMode from "../hooks/useDarkMode";
import Navigation from "./Navigation";

export default function Header() {
  // const [colorTheme, setTheme] = useDarkMode();

  return (
    <header className="fixed top-0 bg-customDarkIndigo w-full p-5 z-10">
      <Navigation />
      {/* <div className="flex items-center justify-end">
        <span
          onClick={() => setTheme(colorTheme)}
          className="w-10 h-10 bg-customLightBlue rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center"
        >
          {colorTheme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#2e3b84"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#2e3b84"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </span>
      </div> */}
    </header>
  );
}
