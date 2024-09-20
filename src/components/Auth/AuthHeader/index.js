import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const AuthHeader = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const location = useLocation();

  // Theo dõi sự thay đổi của location.pathname
  useEffect(() => {
    // Đóng menu ngay lập tức khi location.pathname thay đổi
    setOpenMobileMenu(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-gray-200 border-b px-4 lg:px-6 py-2.5 dark:bg-gray-800 dark:border-gray-700">
      <nav className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link to="/auth/" className="flex items-center">
          <img
            src="/images/iconweb.png"
            className="mr-2 h-8 sm:h-9"
            alt="Webdio Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          𝓦𝓮𝓫𝓭𝓲𝓸
          </span>
        </Link>
        <div className="flex items-center lg:order-2">
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={openMobileMenu}
            onClick={() => setOpenMobileMenu(prev => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 ${openMobileMenu ? "hidden" : "block"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${openMobileMenu ? "block" : "hidden"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            openMobileMenu ? "block z-50" : "hidden"
          } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-2 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                to="/auth/"
                className={`block py-2 pr-4 pl-3 rounded lg:p-0 ${
                  location.pathname === "/auth/"
                    ? "text-white bg-blue-700 lg:bg-transparent lg:text-blue-700"
                    : "text-gray-700 lg:text-gray-700 dark:text-gray-400"
                }`}
                aria-current={location.pathname === "/auth/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/auth/service"
                className={`block py-2 pr-4 pl-3 rounded lg:p-0 ${
                  location.pathname === "/auth/service"
                    ? "text-white bg-blue-700 lg:bg-transparent lg:text-blue-700"
                    : "text-gray-700 lg:text-gray-700 dark:text-gray-400"
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/auth/feedback"
                className={`block py-2 pr-4 pl-3 rounded lg:p-0 ${
                  location.pathname === "/auth/feedback"
                    ? "text-white bg-blue-700 lg:bg-transparent lg:text-blue-700"
                    : "text-gray-700 lg:text-gray-700 dark:text-gray-400"
                }`}
              >
                Feedback
              </Link>
            </li>
            <li>
              <Link
                to="/auth/features"
                className={`block py-2 pr-4 pl-3 rounded lg:p-0 ${
                  location.pathname === "/auth/features"
                    ? "text-white bg-blue-700 lg:bg-transparent lg:text-blue-700"
                    : "text-gray-700 lg:text-gray-700 dark:text-gray-400"
                }`}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/auth/team"
                className={`block py-2 pr-4 pl-3 rounded lg:p-0 ${
                  location.pathname === "/auth/team"
                    ? "text-white bg-blue-700 lg:bg-transparent lg:text-blue-700"
                    : "text-gray-700 lg:text-gray-700 dark:text-gray-400"
                }`}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/auth/contact"
                className={`block py-2 pr-4 pl-3 rounded lg:p-0 ${
                  location.pathname === "/auth/contact"
                    ? "text-white bg-blue-700 lg:bg-transparent lg:text-blue-700"
                    : "text-gray-700 lg:text-gray-700 dark:text-gray-400"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/auth/profile"
                className={`block py-2 pr-4 pl-3 rounded lg:p-0 ${
                  location.pathname === "/auth/profile"
                    ? "text-white bg-blue-700 lg:bg-transparent lg:text-blue-700"
                    : "text-gray-700 lg:text-gray-700 dark:text-gray-400"
                }`}
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AuthHeader;
