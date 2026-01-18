import React from "react";
import logo from "../assets/picture/logotrowel.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Gerong Aplikator" className="h-10" />
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-8 font-medium text-gray-700">
          <li>
            <a
              href="#"
              className="px-5 py-2 rounded-full bg-orange-500 text-white"
            >
              Beranda
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500 transition">
              Layanan
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500 transition">
              Tentang Kami
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500 transition">
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
