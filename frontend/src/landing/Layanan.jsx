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

const Layanan = () => {
  return (
    <section id="layanan" className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // aktif saat 50% terlihat
          className="text-3xl md:text-4xl font-bold text-[#3a1f14] text-center mb-16"
        >
          Layanan Kami
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="w-full lg:w-1/2 space-y-10"
          >
            
            {/* Item 1 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4 }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0d1b4c] text-white font-bold">
                1.
              </div>
              <div>
                <h3 className="text-xl font-bold border-b-4 border-orange-500 inline-block mb-2">
                  Pengecoran Jalan
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pekerjaan pengecoran jalan untuk area perumahan, industri,
                  komersial, dll dengan kualitas tahan lama.
                </p>
              </div>
            </motion.div>

            {/* Item 2 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4 }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0d1b4c] text-white font-bold">
                2.
              </div>
              <div>
                <h3 className="text-xl font-bold border-b-4 border-orange-500 inline-block mb-2">
                  Pengecoran Lantai
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lantai beton yang rata, kokoh, dan siap digunakan untuk
                  berbagai kebutuhan bangunan.
                </p>
              </div>
            </motion.div>

            {/* Item 3 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4 }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0d1b4c] text-white font-bold">
                3.
              </div>
              <div>
                <h3 className="text-xl font-bold border-b-4 border-orange-500 inline-block mb-2">
                  Epoxy Lantai
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Aplikasi epoxy lantai untuk hasil yang rapi, kuat, dan mudah
                  perawatan.
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <img
                src={layananImg}
                alt="Layanan Konstruksi"
                className="w-full max-w-md rounded-[40px] object-cover shadow-lg"
              />

              {/* Decorative Shape */}
              <div className="absolute -bottom-6 -left-6 w-40 h-20 border-[10px] border-white rounded-[30px]"></div>
              <div className="absolute -top-6 -right-6 w-32 h-20 border-[10px] border-white rounded-[30px]"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Layanan;
