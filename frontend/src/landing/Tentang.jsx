import React from "react";
import { motion } from "framer-motion";
import { BrickWall, Building2, Handshake } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // premium easing
    },
  },
};

const Tentang = () => {
  return (
    <section
      id="tentang"
      className="relative w-full py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-200/30 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-[#3a1f14] mb-20"
        >
          Tentang Kami
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* CARD */}
          {[
            {
              icon: <Building2 size={44} />,
              text:
                "Gerong Aplikator memiliki pengalaman dan keahlian dalam bidang pengecoran jalan, pengecoran lantai, serta aplikasi epoxy lantai.",
            },
            {
              icon: <BrickWall size={44} />,
              text:
                "Kami mengutamakan penggunaan material berkualitas dan metode kerja yang tepat untuk menghasilkan pekerjaan yang kuat, rapi, dan sesuai standar.",
            },
            {
              icon: <Handshake size={44} />,
              text:
                "Kami berkomitmen memberikan pelayanan profesional dengan mengedepankan ketepatan waktu dan kepuasan klien di setiap proyek.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{
                y: -16,
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
              className="group relative bg-white rounded-3xl p-10 text-center shadow-[0_15px_40px_rgba(0,0,0,0.08)] cursor-pointer"
            >
              {/* Hover Glow Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-orange-400/40 to-orange-600/40 blur-xl" />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex justify-center mb-8 text-[#0d1b4c]"
                >
                  {item.icon}
                </motion.div>

                <p className="text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tentang;
