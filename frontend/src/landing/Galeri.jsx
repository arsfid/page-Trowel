import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryData = [
  {
    img: "/src/assets/picture/GaleriProyek/jalancor.jpg",
    title: "Pengecoran Jalan",
    desc: "Konstruksi jalan beton dengan hasil rapi dan tahan lama.",
  },
  {
    img: "/src/assets/picture/GaleriProyek/corlantai.jpg",
    title: "Pengecoran Lantai",
    desc: "Lantai beton presisi untuk gudang & bangunan industri.",
  },
  {
    img: "/src/assets/picture/hero.jpg",
    title: "Epoxy Lantai",
    desc: "Finishing epoxy profesional, bersih dan awet.",
  },
   {
    img: "/src/assets/picture/hero.jpg",
    title: "Epoxy Lantai",
    desc: "Finishing epoxy profesional, bersih dan awet.",
  },
];

const Galeri = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [scale, setScale] = useState(1);
  const lastTap = useRef(0);

  const next = () => {
    setScale(1);
    setActiveIndex((p) => (p + 1) % galleryData.length);
  };

  const prev = () => {
    setScale(1);
    setActiveIndex((p) => (p === 0 ? galleryData.length - 1 : p - 1));
  };

  const handleWheel = (e) => {
    e.preventDefault();
    setScale((p) => Math.min(Math.max(p + e.deltaY * -0.0012, 1), 3));
  };

  const handleTap = () => {
    const now = Date.now();
    if (now - lastTap.current < 300) {
      setScale((p) => (p < 2 ? 2 : p < 3 ? 3 : 1));
    }
    lastTap.current = now;
  };

  return (
    <>
      {/* SECTION */}
      <section id="galeri" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3a1f14] mb-4">
            Galeri Proyek
          </h2>

          <p className="text-gray-500 mb-8">
            Dokumentasi proyek terbaik kami
          </p>

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
            {galleryData.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className="
                  relative min-w-[80%] sm:min-w-[45%] lg:min-w-[32%]
                  snap-center cursor-zoom-in group
                "
              >
                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="
                    w-full h-[260px]
                    object-contain bg-gray-100
                    rounded-3xl shadow-lg
                  "
                />

                {/* TEXT OVERLAY */}
                <div
                  className="
                    absolute inset-0 rounded-3xl
                    bg-gradient-to-t from-black/80 via-black/40 to-transparent
                    flex flex-col justify-end
                    p-5
                  "
                >
                  <h3 className="
                    text-white text-lg font-semibold
                    leading-tight
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    text-gray-200 text-sm mt-1 leading-snug
                  ">
                    {item.desc}
                  </p>

                  <span className="
                    text-xs text-gray-300 mt-2
                    opacity-80 group-hover:opacity-100
                    transition
                  ">
                    Klik untuk lihat detail →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-[999]
              bg-black/80 backdrop-blur-md
              flex items-center justify-center px-4
            "
          >
            <button
              onClick={() => {
                setActiveIndex(null);
                setScale(1);
              }}
              className="absolute top-6 right-6 text-white z-10"
            >
              <X size={32} />
            </button>

            <button onClick={prev} className="hidden md:block absolute left-6 text-white z-10">
              <ChevronLeft size={40} />
            </button>
            <button onClick={next} className="hidden md:block absolute right-6 text-white z-10">
              <ChevronRight size={40} />
            </button>

            <div
              onWheel={handleWheel}
              onClick={handleTap}
              className="relative bg-black rounded-3xl overflow-hidden max-w-5xl w-full"
            >
              {/* ZOOM INDICATOR */}
              <div className="absolute top-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                {Math.round(scale * 100)}%
              </div>

              <motion.img
                src={galleryData[activeIndex].img}
                drag={scale > 1}
                dragConstraints={{ left: -400, right: 400, top: -300, bottom: 300 }}
                style={{ scale }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="w-full max-h-[70vh] object-contain cursor-grab"
              />

              <div className="p-6 bg-black/70 text-white">
                <h3 className="text-2xl font-bold">
                  {galleryData[activeIndex].title}
                </h3>
                <p className="text-gray-300 mt-2">
                  {galleryData[activeIndex].desc}
                </p>
                <p className="text-sm text-gray-400 mt-3">
                  Double tap / scroll untuk zoom • Drag untuk geser
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Galeri;
