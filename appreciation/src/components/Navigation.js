import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import useDarkMode from "../hooks/useDarkMode";
import { useState } from "react";

const navigation = [
  { name: "Intro", href: "/", current: true },
  { name: "Portfolio", href: "/portfolio", current: false },
  { name: "Blog", href: "/blog", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [colorTheme, setTheme] = useDarkMode();
  const [current, setCurrent] = useState(window.location.pathname);
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="sm:my-3">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-customLightBlue hover:text-customDarkIndigo hover:bg-customLightBlue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-customLightBlue">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === current
                            ? "bg-customLightBlue text-customDarkIndigo"
                            : "text-customLightBlue border-2 border-customLightBlue hover:border-none hover:bg-customDarkGreen hover:text-customLightGreen",
                          "px-10 py-2 rounded-md text-xl"
                        )}
                        aria-current={item.current ? current : undefined}
                        onClick={() => setCurrent(item.href)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end">
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
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.href === current
                      ? "bg-customLightBlue text-customDarkIndigo"
                      : "text-customLightBlue hover:bg-customDarkGreen hover:text-customLightGreen",
                    "block px-3 py-2 rounded-md text-base"
                  )}
                  aria-current={item.current ? current : undefined}
                  onClick={() => setCurrent(item.href)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
