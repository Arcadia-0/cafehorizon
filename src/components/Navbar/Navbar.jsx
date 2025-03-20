import React, { useState } from "react";
import logodark from "../../assets/logodark.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-primary shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img
          src={logodark}
          className="w-15 h-auto"
          alt="Flowbite Logo"
        />

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-primary hover:bg-secondary font-medium text-sm px-6 py-2"
          >
            KEŞFET
          </button>
          <button
            onClick={handleMenuToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-primary rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className={`block py-2 px-3 ${
                  location.pathname === "/"
                    ? "text-primary md:hover:bg-transparent"
                    : "text-gray-900"
                } rounded-sm md:bg-transparent md:p-0`}
                aria-current="page"
              >
                ANA SAYFA
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-primary rounded-sm md:hover:bg-transparent md:p-0"
              >
                HAKKIMIZDA
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-primary rounded-sm md:hover:bg-transparent md:p-0"
              >
                MENÜ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-primary rounded-sm md:hover:bg-transparent md:p-0"
              >
                İLETİŞİM
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
