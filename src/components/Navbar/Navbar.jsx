import React, { useState, useEffect } from "react";
import logodark from "../../assets/logodark.png";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  // State for controlling the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle the mobile menu toggle
  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Scroll to top when the home button or logo is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  // Close the mobile menu when a menu item is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  useEffect(() => {
    setIsMobileMenuOpen(false); // Start with mobile menu closed
  }, []);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-primary shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo with scroll-to-top functionality */}
        <img
          src={logodark}
          className="w-15 h-auto cursor-pointer"
          alt="Flowbite Logo"
          onClick={scrollToTop} // Scroll to top when the logo is clicked
        />

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/detailmenu">
          <button
            type="button"
            className="cursor-pointer text-white bg-primary hover:bg-secondary font-medium text-sm px-6 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-md"
          >
            KEŞFET
          </button>
          </Link>
          <button
            onClick={handleMenuToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only"></span>
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
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-primary rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to="/"
                onClick={() => { scrollToTop(); handleLinkClick(); }}
                className="block py-2 px-3 text-primary rounded-sm md:hover:bg-transparent md:p-0"
                aria-current="page"
              >
                ANA SAYFA
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="block py-2 px-3 text-primary rounded-sm md:hover:bg-transparent md:p-0"
              >
                HAKKIMIZDA
              </Link>
            </li>
            <li>
              <Link
                to="/detailmenu"
                onClick={handleLinkClick}
                className="block py-2 px-3 text-primary rounded-sm md:hover:bg-transparent md:p-0"
              >
                MENÜ
              </Link>
            </li>
            <li>
              <a
                href="#footer"  
                onClick={handleLinkClick}  
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
