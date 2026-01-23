import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Kontak = () => {
  const phoneNumber = "6282136522188";
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Halo,
Saya ${nama}.

${pesan}

Mohon info lebih lanjut. Terima kasih.`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <section
      id="kontak"
      className="relative w-full py-28 bg-neutral-950 text-white overflow-hidden"
    >
      {/* BACKGROUND ACCENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.15),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-14 items-center"
        >
          {/* LEFT */}
          <div>
            <span className="inline-block mb-4 text-sm tracking-widest text-orange-400">
              CONTACT US
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Let’s build your <br /> next project
            </h2>

            <p className="text-neutral-400 max-w-md mb-8">
              Konsultasikan kebutuhan proyek Anda bersama tim profesional kami.
              Kami siap membantu dari perencanaan hingga eksekusi.
            </p>

            <div className="space-y-3 text-sm text-neutral-300">
              <p>✔ Konsultasi tanpa biaya</p>
              <p>✔ Estimasi transparan</p>
              <p>✔ Respon cepat via WhatsApp</p>
            </div>
          </div>

          {/* RIGHT */}
          <form
            onSubmit={handleSubmit}
            className="
              bg-neutral-900/80 backdrop-blur-xl
              border border-white/10
              rounded-3xl p-8 md:p-10
              space-y-6
            "
          >
            <div>
              <label className="block text-sm text-neutral-400 mb-2">
                Nama
              </label>
              <input
                type="text"
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama lengkap Anda"
                className="
                  w-full bg-transparent
                  border-b border-neutral-700
                  py-3 text-white
                  focus:outline-none focus:border-orange-500
                  transition
                "
              />
            </div>

            <div>
              <label className="block text-sm text-neutral-400 mb-2">
                Pesan
              </label>
              <textarea
                rows="4"
                required
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                placeholder="Ceritakan kebutuhan proyek Anda"
                className="
                  w-full bg-transparent
                  border-b border-neutral-700
                  py-3 text-white
                  focus:outline-none focus:border-orange-500
                  transition resize-none
                "
              />
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="
                w-full flex items-center justify-between
                px-6 py-4
                rounded-2xl
                bg-orange-500 hover:bg-orange-600
                text-black font-medium
                transition
              "
            >
              Kirim via WhatsApp
              <ArrowUpRight />
            </motion.button>

            <p className="text-xs text-neutral-500 text-center">
              Anda akan diarahkan langsung ke WhatsApp
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Kontak;
