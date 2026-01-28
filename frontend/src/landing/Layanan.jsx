import React from "react";
import { motion } from "framer-motion";
import layananImg from "../assets/picture/GaleriProyek/corlantai4.jpg";

/* ===== ANIMATION VARIANTS ===== */
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

const floatAnim = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Layanan() {
  return (
    <section id="layanan" className="px-6 md:px-20 py-27 overflow-hidden">
      {/* TITLE */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold text-center mb-20"
      >
        Layanan Kami
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-15 md:pl-14"
        >
          {/* ITEM 1 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ x: 4 }}
            className="flex gap-4 group"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="bg-blue-300 text-white px-4 py-2 rounded-xl font-bold shadow-md"
            >
              01
            </motion.span>
            <div>
              <h3 className="font-bold text-lg mb-1">
                Pengecoran Jalan
              </h3>
              <p className="text-gray-600">
                Pekerjaan pengecoran jalan untuk area perumahan, industri, dan
                komersial dengan hasil kuat dan tahan lama.
              </p>
            </div>
          </motion.div>

          {/* ITEM 2 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ x: 4 }}
            transition={{ delay: 0.15 }}
            className="flex gap-4 group"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="bg-blue-300 text-white px-4 py-2 rounded-xl font-bold shadow-md"
            >
              02
            </motion.span>
            <div>
              <h3 className="font-bold text-lg mb-1">
                Pengecoran Lantai
              </h3>
              <p className="text-gray-600">
                Lantai beton yang rata, kokoh, dan siap digunakan untuk berbagai
                kebutuhan bangunan.
              </p>
            </div>
          </motion.div>

          {/* ITEM 3 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ x: 4 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 group"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="bg-blue-300 text-white px-4 py-2 rounded-xl font-bold shadow-md"
            >
              03
            </motion.span>
            <div>
              <h3 className="font-bold text-lg mb-1">
                Epoxy Lantai
              </h3>
              <p className="text-gray-600">
                Aplikasi epoxy lantai profesional untuk hasil rapi, kuat, dan
                mudah perawatan.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <motion.img
            src={layananImg}
            alt="layanan"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl w-[300px] md:w-[400px] h-[420px] md:h-[560px] object-cover shadow-xl"
          />

          {/* FLOATING CARD 1 */}
          <motion.div
            variants={floatAnim}
            animate="animate"
            className="absolute top-4 left-4 bg-white/60 backdrop-blur-md border shadow-xl px-4 py-2 rounded-2xl flex items-center gap-3"
          >
            <img
              src="https://i.pravatar.cc/40?img=11"
              alt="user"
              className="w-9 h-9 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">Budi Santoso</p>
              <p className="text-xs text-gray-600">⭐ 5,0</p>
            </div>
          </motion.div>

          {/* FLOATING CARD 2 (HIDE MOBILE) */}
          <motion.div
            variants={floatAnim}
            animate="animate"
            className="hidden md:flex absolute bottom-40 left-6 bg-white/60 backdrop-blur-md border shadow-xl px-4 py-2 rounded-2xl items-center gap-3"
          >
            <img
              src="https://i.pravatar.cc/40?img=15"
              alt="user"
              className="w-9 h-9 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">Andi Pratama</p>
              <p className="text-xs text-gray-600">⭐ 4,9</p>
            </div>
          </motion.div>

          {/* FLOATING CARD 3 (HIDE MOBILE) */}
          <motion.div
            variants={floatAnim}
            animate="animate"
            className="hidden md:flex absolute bottom-60 right-2 bg-white/60 backdrop-blur-md border shadow-xl px-4 py-2 rounded-2xl items-center gap-3"
          >
            <img
              src="https://i.pravatar.cc/40?img=18"
              alt="user"
              className="w-9 h-9 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">Dewi Lestari</p>
              <p className="text-xs text-gray-600">⭐ 4,8</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
