import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaDice, FaCrown, FaHotel, FaPhone } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Services", path: "/services", icon: <FaDice /> },
  { name: "About", path: "/about", icon: <FaCrown /> },
  { name: "Rooms", path: "/room", icon: <FaHotel /> },
  { name: "Contact", path: "/contact", icon: <FaPhone /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#141515] border-b border-gray-700/40">
        <div className="flex items-center justify-between px-4 md:px-4 h-16">

          {/* Left Section */}
          <div className="flex items-center gap-3">
            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="text-[#D09A48] hover:scale-105 bg-[#D09A48]/10 p-1.5 text-2xl"
            >
              <FaBars />
            </button>

            {/* Logo + Top Links (like BAJI) */}
            <div className="hidden md:flex items-center gap-4 text-[#8E9AA5] font-medium">
              <Link to="/" className="text-xl">Baji</Link>
              <Link to="/">Slots</Link>
              <Link to="/">Casino</Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-[#8E9AA5] rounded-md px-4 py-1.5 border border-[#8E9AA5] text-sm hover:text-white"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-[#13805E] text-white text-sm px-4 py-1.5 rounded-md hover:opacity-90"
            >
              Sign Up
            </Link>

            <img
              src="https://flagcdn.com/w20/bd.png"
              alt="flag"
              className="w-6 h-4 object-cover rounded-sm cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* ==== LEFT COLLAPSED ICON BAR (DESKTOP ONLY) ==== */}
      <div className="hidden md:flex fixed top-16 left-0 h-[calc(100vh-64px)] w-14 bg-[#141515] border-r border-gray-700/40 z-40 flex-col items-center py-4 gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-[#8E9AA5] text-xl hover:text-[#D09A48] transition"
          >
            {link.icon}
          </Link>
        ))}
      </div>

      {/* Overlay (for both mobile & desktop when open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ==== EXPANDED DRAWER ==== */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-[#141515] z-50 
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-gray-700/40">
          <span className="text-[#8E9AA5] font-semibold">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#8E9AA5] text-xl"
          >
            <FaTimes />
          </button>
        </div>

        {/* Drawer Links with Icon + Text */}
        <ul className="flex flex-col py-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-6 py-3 text-[#8E9AA5] hover:bg-[#1f2020] hover:text-white transition"
              >
                <span className="text-lg">{link.icon}</span>
                <span className="text-sm">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
      {/* Spacer for left collapsed bar on desktop */}
      <div className="hidden md:block w-14"></div>
    </>
  );
};

export default Navbar;
