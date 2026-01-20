import React from "react";
import layananImg from "../assets/picture/hero.jpg"; 


const Layanan = () => {
  return (
    <section id="layanan" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#3a1f14] text-center mb-16">
          Layanan Kami
        </h2>

        <div className="flex flex-col lg:flex-row gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 space-y-10">
            
            {/* Item 1 */}
            <div className="flex gap-5">
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
            </div>

            {/* Item 2 */}
            <div className="flex gap-5">
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
            </div>

            {/* Item 3 */}
            <div className="flex gap-5">
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
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src={layananImg}
                alt="Layanan Konstruksi"
                className="w-full max-w-md rounded-[40px] object-cover shadow-lg"
              />

              {/* Decorative Shape */}
              <div className="absolute -bottom-6 -left-6 w-40 h-20 border-[10px] border-white rounded-[30px] bg-transparent"></div>
              <div className="absolute -top-6 -right-6 w-32 h-20 border-[10px] border-white rounded-[30px] bg-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Layanan;
