import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const location = useLocation();

  // Theo dõi sự thay đổi của location.pathname
  useEffect(() => {
    // Đóng menu ngay lập tức khi location.pathname thay đổi
    setOpenMobileMenu(false);
  }, [location.pathname]);

  return (
    <header>
      <nav className="bg-white border-gray-200 border-b px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="auth/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              WEBDIO
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
                  to="/admin/"
                  className={`block py-2 pr-4 pl-3 rounded lg:p-0 dark:text-white ${
                    location.pathname === "/admin/"
                      ? "text-white bg-blue-700 lg:bg-transparent lg:text-blue-700"
                      : "text-gray-700 lg:text-gray-700 dark:text-gray-400"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/service"
                  className={`block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white ${
                    location.pathname === "/admin/service"
                      ? "text-white bg-blue-700 lg:bg-transparent lg:text-blue-700"
                      : "text-gray-700 lg:text-gray-700 dark:text-gray-400"
                  }`}
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/marketplace"
                  className={`block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white ${
                    location.pathname === "/admin/marketplace"
                      ? "text-white bg-blue-700 lg:bg-transparent lg:text-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/features"
                  className={`block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white ${
                    location.pathname === "/admin/features"
                      ? "text-white bg-blue-700 lg:bg-transparent lg:text-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/team"
                  className={`block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white ${
                    location.pathname === "/admin/team"
                      ? "text-white bg-blue-700 lg:bg-transparent lg:text-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/contact"
                  className={`block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white ${
                    location.pathname === "/admin/contact"
                      ? "text-white bg-blue-700 lg:bg-transparent lg:text-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/profile"
                  className={`block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white ${
                    location.pathname === "/admin/profile"
                      ? "text-white bg-blue-700 lg:bg-transparent lg:text-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
