import React, { useState } from "react";
import logo from "../assets/picture/logotrowel.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuStyle =
    "px-5 py-2 rounded-full hover:bg-orange-500 hover:text-white transition";

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Gerong Aplikator" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4 font-medium text-gray-700">
          <li>
            <a href="#home" className={menuStyle}>
              Beranda
            </a>
          </li>
          <li>
            <a href="#layanan" className={menuStyle}>
              Layanan
            </a>
          </li>
          <li>
            <a href="#tentang" className={menuStyle}>
              Tentang Kami
            </a>
          </li>
          <li>
            <a href="#" className={menuStyle}>
              Galeri
            </a>
          </li>
          <li>
            <a href="#" className={menuStyle}>
              Kontak
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4">
          <ul className="flex flex-col gap-3 font-medium text-gray-700">
            <li>
              <a href="#home" className={menuStyle}>
                Beranda
              </a>
            </li>
            <li>
              <a href="#layanan" className={menuStyle}>
                Layanan
              </a>
            </li>
            <li>
              <a href="#tentang" className={menuStyle}>
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#" className={menuStyle}>
                Galeri
              </a>
            </li>
            <li>
              <a href="#" className={menuStyle}>
                Kontak
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
