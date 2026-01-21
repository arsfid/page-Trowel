import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import logo from "../assets/picture/logotrowel.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    let lastScroll = 0;

    return scrollY.onChange((current) => {
      if (current > lastScroll && current > 100) {
        setHidden(true); // scroll down → hide
      } else {
        setHidden(false); // scroll up → show
      }
      lastScroll = current;
    });
  }, [scrollY]);

  const menu = [
    { name: "Beranda", href: "#home" },
    { name: "Layanan", href: "#layanan" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Galeri", href: "#" },
    { name: "Kontak", href: "#" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <img src={logo} alt="Gerong Aplikator" className="h-10" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            {menu.map((item, i) => (
              <li key={i} className="relative group">
                <a
                  href={item.href}
                  className="transition-colors group-hover:text-orange-500"
                >
                  {item.name}
                </a>

                {/* UNDERLINE */}
                <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-orange-500 rounded-full transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-16 left-0 w-full bg-white shadow-lg md:hidden z-40 overflow-hidden"
          >
            <ul className="flex flex-col gap-6 px-6 py-6 font-medium text-gray-700">
              {menu.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b pb-2 hover:text-orange-500 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
