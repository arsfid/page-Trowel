import React from "react";
import { motion } from "framer-motion";
import layananImg from "../assets/picture/hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const services = [
  {
    id: "01",
    title: "Pengecoran Jalan",
    desc: "Pekerjaan pengecoran jalan untuk area perumahan, industri, dan komersial dengan hasil kuat dan tahan lama.",
  },
  {
    id: "02",
    title: "Pengecoran Lantai",
    desc: "Lantai beton yang rata, kokoh, dan siap digunakan untuk berbagai kebutuhan bangunan.",
  },
  {
    id: "03",
    title: "Epoxy Lantai",
    desc: "Aplikasi epoxy lantai profesional untuk hasil rapi, kuat, dan mudah perawatan.",
  },
];

const Layanan = () => {
  return (
    <section
      id="layanan"
      className="w-full bg-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#3a1f14] text-center mb-20"
        >
          Layanan Kami
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="space-y-8"
          >
            {services.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.4 }}
                className="flex items-start gap-6 p-6 rounded-2xl hover:bg-gray-50 transition"
              >
                {/* Number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0d1b4c] text-white font-bold flex items-center justify-center">
                  {item.id}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold mb-2 relative inline-block">
                    {item.title}
                    <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-orange-500 rounded-full"></span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src={layananImg}
                alt="Layanan Konstruksi"
                className="w-full max-w-lg rounded-[36px] object-cover shadow-xl"
                loading="lazy"
              />

              {/* Decorative accents */}
              <div className="absolute -bottom-4 -left-4 w-28 h-14 border-8 border-white rounded-2xl"></div>
              <div className="absolute -top-4 -right-4 w-24 h-14 border-8 border-white rounded-2xl"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Layanan;
