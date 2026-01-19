import React from "react";
import { motion } from "framer-motion";
import { BrickWall, Building2, Handshake } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Tentang = () => {
  return (
    <section id="tentang" className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-[#3a1f14] mb-14"
        >
          Tentang Kami
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Card 1 */}
          <motion.div
            variants={card}
            whileHover={{
              y: -10,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl shadow-lg px-8 py-10 text-center cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex justify-center mb-6"
            >
              <Building2 size={40} />
            </motion.div>
            <p className="text-gray-700 leading-relaxed">
              Gerong Aplikator memiliki pengalaman dan keahlian dalam bidang
              pengecoran jalan, pengecoran lantai, serta aplikasi epoxy lantai.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={card}
            whileHover={{
              y: -10,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl shadow-lg px-8 py-10 text-center cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex justify-center mb-6"
            >
              <BrickWall size={40} />
            </motion.div>
            <p className="text-gray-700 leading-relaxed">
              Kami mengutamakan penggunaan material berkualitas dan metode kerja
              yang tepat untuk menghasilkan pekerjaan yang kuat, rapi, dan
              sesuai standar.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={card}
            whileHover={{
              y: -10,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl shadow-lg px-8 py-10 text-center cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex justify-center mb-6"
            >
              <Handshake size={40} />
            </motion.div>
            <p className="text-gray-700 leading-relaxed">
              Kami berkomitmen memberikan pelayanan profesional dengan
              mengedepankan ketepatan waktu dan kepuasan klien di setiap proyek.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tentang;
