import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryData = [
  {
    img: "/src/assets/picture/hero.jpg",
    title: "Pengecoran Jalan",
    desc: "Pekerjaan pengecoran jalan dengan hasil kuat, rapi, dan tahan lama.",
  },
  {
    img: "/src/assets/picture/hero.jpg",
    title: "Pengecoran Lantai",
    desc: "Lantai beton rata dan kokoh untuk berbagai kebutuhan bangunan.",
  },
  {
    img: "/src/assets/picture/hero.jpg",
    title: "Epoxy Lantai",
    desc: "Finishing epoxy profesional dengan tampilan bersih dan awet.",
  },
  {
    img: "/src/assets/picture/hero.jpg",
    title: "Proyek Industri",
    desc: "Proyek skala besar dengan standar mutu dan ketepatan waktu.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Galeri = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % galleryData.length);

  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? galleryData.length - 1 : prev - 1
    );

  return (
    <>
      {/* SECTION */}
      <section id="galeri" className="w-full bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* TITLE */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#3a1f14] mb-4"
          >
            Galeri Proyek
          </motion.h2>

          {/* HINT */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="text-gray-500 mb-8 flex items-center gap-2"
          >
            <span className="animate-pulse">←</span>
            Geser ke samping atau klik gambar untuk melihat detail
            <span className="animate-pulse">→</span>
          </motion.p>

          {/* HORIZONTAL SCROLL */}
          <div className="overflow-x-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.15 }}
              className="flex gap-6 pb-6 snap-x snap-mandatory"
            >
              {galleryData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveIndex(index)}
                  className="
                    relative
                    min-w-[80%]
                    sm:min-w-[45%]
                    lg:min-w-[32%]
                    snap-center
                    cursor-zoom-in
                    group
                  "
                >
                  {/* IMAGE */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[260px] object-cover rounded-3xl shadow-lg"
                  />

                  {/* OVERLAY INFO */}
                  <div className="
                    absolute inset-0 rounded-3xl
                    bg-gradient-to-t from-black/75 via-black/30 to-transparent
                    flex flex-col justify-end
                    p-5
                  ">
                    <h3 className="text-white text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="
                      text-gray-200 text-sm mt-1
                      opacity-0 translate-y-2
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-300
                      hidden sm:block
                    ">
                      {item.desc}
                    </p>

                    <span className="text-xs text-gray-300 mt-2">
                      Klik untuk detail →
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-[999]
              bg-black/80 backdrop-blur-md
              flex items-center justify-center
              px-4
            "
          >
            {/* CLOSE */}
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute top-6 right-6 text-white z-10"
            >
              <X size={32} />
            </button>

            {/* LEFT */}
            <button
              onClick={prev}
              className="hidden md:flex absolute left-6 text-white z-10"
            >
              <ChevronLeft size={40} />
            </button>

            {/* RIGHT */}
            <button
              onClick={next}
              className="hidden md:flex absolute right-6 text-white z-10"
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -80) next();
                if (info.offset.x > 80) prev();
              }}
              className="bg-black rounded-3xl overflow-hidden max-w-5xl w-full"
            >
              <img
                src={galleryData[activeIndex].img}
                alt=""
                className="w-full max-h-[70vh] object-cover"
              />

              <div className="p-6 text-white bg-black/70">
                <h3 className="text-2xl font-bold mb-2">
                  {galleryData[activeIndex].title}
                </h3>
                <p className="text-gray-300">
                  {galleryData[activeIndex].desc}
                </p>
                <p className="text-sm text-gray-400 mt-3">
                  Geser atau klik panah untuk melihat proyek lainnya
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Galeri;
