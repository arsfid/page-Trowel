import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/picture/hero.jpg";
import heroKiri from "../assets/picture/herokiri.png";

const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col md:flex-row pt-16 overflow-hidden"
    >
      
      {/* LEFT IMAGE + OVERLAY */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: false }}
        className="relative w-full md:w-1/2 min-h-[500px]"
        style={{
          backgroundImage: `url(${heroKiri})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#210D01]/85"></div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: false }}
        className="w-full md:w-2/3 min-h-[500px]"
      >
        <img
          src={heroImage}
          alt="Konstruksi"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* HERO TEXT (NYEBRANG) */}
      <motion.div
        variants={textContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: false }}
        className="absolute inset-0 flex items-center"
      >
        <div className="relative z-10 px-8 md:px-20 max-w-5xl text-white">
          
          <motion.h1
            variants={textItem}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Solusi Jasa Konstruksi <br />
            Profesional
          </motion.h1>

          <motion.p
            variants={textItem}
            className="text-gray-200 mb-8 leading-relaxed max-w-xl"
          >
            Gerong Aplikator menyediakan jasa bangunan terpercaya mulai dari
            pengecoran jalan, pengecoran lantai, dan epoxy.
          </motion.p>

          <motion.button
            variants={textItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-orange-500 rounded-md hover:bg-orange-600 transition"
          >
            Hubungi Kami
          </motion.button>

        </div>
      </motion.div>
    </section>
  );
};

export default Home;
