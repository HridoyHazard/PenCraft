import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Test = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Explore", path: "explore" },
    { link: "Travel", path: "travel" },
    { link: "Blog", path: "blog" },
    { link: "Pricing", path: "pricing" },
  ];
  return (
    // <nav class="bg-white border-gray-200 dark:bg-gray-900">
    //   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
    //       <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
    //         logo
    //       </span>
    //     </a>
    //     <div className="md:hidden flex items-center">
    //       <button
    //         onClick={handleMenu}
    //         className="Focus:outline-none focus:text-gray-500"
    //       >
    //         {isMenuOpen ? (
    //           <FaXmark className="w-6 h-6 text-white " />
    //         ) : (
    //           <FaBars className="w-6 h-6 text-white" />
    //         )}
    //       </button>
    //     </div>

    //     <div
    //       className={`space-y-4 px-4 mt-16 py-7 bg-white text-center font-bold  ${
    //         isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
    //       }`}
    //     >
    //       {navItems.map(({ link, path }) => (
    //         <Link
    //           to={path}
    //           spy={true}
    //           smooth={true}
    //           offset={-100}
    //           key={path}
    //           className="block text-base text-gray-900 first:font-medium text-[24px]"
    //         >
    //           {link}
    //         </Link>
    //       ))}
    //     </div>

    //     <div class="hidden w-full md:block md:w-auto" id="navbar-default">
    //       <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         <li>
    //           <a
    //             href="#"
    //             class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
    //             aria-current="page"
    //           >
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Pricing
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Dropdown button{" "}
        <svg
          class="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Test;
