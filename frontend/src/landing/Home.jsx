import React from "react";
import heroImage from "../assets/picture/hero.jpg";

const Home = () => {
  return (
    <section className="w-full min-h-screen flex">
      {/* Left Content */}
      <div className="w-1/2 bg-black/80 text-white flex flex-col justify-center px-16">
        <h1 className="text-4xl font-bold leading-tight mb-6">
          Solusi Jasa Konstruksi <br /> Profesional
        </h1>

        <p className="text-gray-300 mb-8 leading-relaxed">
          Gerong Aplikator menyediakan jasa bangunan terpercaya mulai dari
          pengecoran jalan, pengecoran lantai, dan epoxy.
        </p>

        <button className="w-fit px-6 py-3 bg-orange-500 rounded-md hover:bg-orange-600 transition">
          Hubungi Kami
        </button>
      </div>

      {/* Right Image */}
      <div className="w-1/2">
        <img
          src={heroImage}
          alt="Konstruksi"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Home;
