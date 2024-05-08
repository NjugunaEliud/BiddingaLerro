"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faSearch,
  faShoppingCart,
  faSignOutAlt,
  faUser,
  faUserAlt,
  faUserCircle,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@headlessui/react";

function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [username, setName] = useState("");
  const [role, setRole] = useState("");
  const [telephone, setTelephone] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("userBidName"));
    setRole(localStorage.getItem("userBidRole"));
    setTelephone(localStorage.getItem("userBidMobile"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userBidRole");
    localStorage.removeItem("userBidMobile");
    localStorage.removeItem("userBidName");
    localStorage.removeItem("userBidEmail");
    window.location.href = "/";
    MySwal.fire({
      title: "Logout Successfully!",
      text: "thankyou for your time",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  return (
    <div className="bg-white  py-2 px-4 lg:px-16  sticky top-0 z-10">
      <div className="flex justify-between items-center">
        {/* Logo Area */}
        <Link href="/">
          {/* <h1 className="text-white text-2xl font-bold">Bidaaanga Lerro</h1> */}
          <Image src="/Bidaanga Lerro.jpg" alt="logo" width={70} height={150} />
        </Link>

        <div className="flex justify-between cursor-pointer text-gray-900 font-semibold">
          <div className="hidden sm:flex">
            <Link href="/home" className="m-2 p-2 hover:bg-yellow-500 hover:rounded-md hover:text-white hover:m-2">Home</Link>
            <Link href="/home" className="m-2 p-2 hover:bg-yellow-500 hover:rounded-md hover:text-white hover:m-2">Live auctions</Link>
            {/* <Link href="#contact" className="m-2 p-2 hover:bg-yellow-500 hover:rounded-md hover:text-white hover:m-2">Contact us</Link> */}
            {/* <Link href="#" className="m-2 p-2 hover:bg-yellow-500 hover:rounded-md hover:text-white hover:m-2">Faq</Link> */}
            {/* <Link href="#" className="m-2 p-2 hover:bg-yellow-500 hover:rounded-md hover:text-white hover:m-2">Terms and condition</Link> */}
            <Link href="/allbidders" className="m-2 p-2 hover:bg-yellow-500 hover:rounded-md hover:text-white hover:m-2">Bidders</Link>
            <Link href="/top5unique" className="m-2 p-2 hover:bg-yellow-500 hover:rounded-md hover:text-white hover:m-2">Top 5 Bidders</Link>
            <Link href="/winners" className="m-2 p-2 hover:bg-yellow-500 hover:rounded-md hover:text-white hover:m-2">Winners</Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center">
          <div className="relative  ">
            <input
              type="text"
              placeholder="Search"
              className="shadow-md shadow-yellow-500 text-black rounded-full py-2 px-4 focus:outline-none "
            />
            <div className="absolute top-0 right-0 mt-2 mr-3">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </div>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden">
          {isDrawerOpen ? (
            ""
          ) : (
            <button
              onClick={toggleDrawer}
              className="text-gray-700 focus:outline-none"
            >
              <svg

                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-black"
              >
                <path d="M18 15.4688H0V17.7207H18V15.4688Z" fill="black"></path>
                <path
                  d="M11.0226 7.87402H0V10.126H11.0226V7.87402Z"
                  fill="black"
                ></path>
                <path
                  d="M18 0.279297H0V2.53127H18V0.279297Z"
                  fill="black"
                ></path>
              </svg>
              {/* <FontAwesomeIcon icon={faBars} size="lg" /> */}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer (Hidden by default) */}
      {isDrawerOpen && (
        <div className="lg:hidden absolute z-50 top-0 left-0 transform transition-transform ease-in-out duration-300 translate-x-0">
          {/* Drawer Content */}
          <div className="bg-white text-black h-screen w-64 fixed top-0 left-0 transform transition-transform ease-in-out duration-300 translate-x-0">
            <div className="flex justify-between items-center p-4">
              <Link href="/">
                <Image
                  src="/bid leo.png"
                  alt="logo"
                  width={150}
                  height={150}
                />
                {/* Bid Leo */}
              </Link>
              <button
                onClick={toggleDrawer}
                className="text-primary focus:outline-none"
              >
                <FontAwesomeIcon icon={faClose} size="lg" />
              </button>
            </div>

            <div className="border-t border-gray-200 mt-auto p-4">
              <div className="relative mt-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-200 rounded-full py-2 px-4 focus:outline-none focus:bg-white w-full"
                />
                <div className="absolute top-0 right-0 mt-2 mr-3">
                  <FontAwesomeIcon icon={faSearch} size="lg" />
                </div>
              </div>
            </div>

            <div className="px-4 py-6 ">
              <Link href="/home" className="block my-3 font-bold border-b-2">
                Home
              </Link>
              <Link href="/home" className="block my-3 font-bold border-b-2">
                Live auctions
              </Link>
              <Link href="/allbidders" className="block my-3 font-bold border-b-2">
               Bidders
              </Link>
              <Link href="/top5unique" className="block my-3 font-bold border-b-2">
               Top 5 unique
              </Link>
              <Link href="/winners" className="block my-3 font-bold border-b-2">
               Winners
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* Overlay */}
      {isDrawerOpen && (
        <div
          onClick={toggleDrawer}
          className="bg-black opacity-50 fixed top-0 left-0 h-screen w-screen z-40"
        ></div>
      )}
    </div>
  );
}

export default NavBar;
