export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">Trowel</h1>
          <nav className="space-x-6 text-gray-700 font-medium">
            <a href="#layanan" className="hover:text-orange-600">Layanan</a>
            <a href="#tentang" className="hover:text-orange-600">Tentang</a>
            <a href="#kontak" className="hover:text-orange-600">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Solusi Jasa Bangunan Profesional
            </h2>
            <p className="text-lg mb-8">
              Trowel menyediakan jasa bangunan terpercaya mulai dari renovasi,
              pembangunan rumah, hingga finishing interior & eksterior.
            </p>
            <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100">
              Konsultasi Gratis
            </button>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1598300053651-33d2f6e56c79"
              alt="Bangunan"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="layanan" className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">Layanan Kami</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {["Renovasi Rumah", "Bangun Baru", "Finishing & Interior"].map(
            (item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold mb-3">{item}</h4>
                <p className="text-gray-600">
                  Dikerjakan oleh tenaga profesional dengan material berkualitas
                  dan hasil rapi.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* About */}
      <section id="tentang" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Tentang Trowel</h3>
          <p className="text-gray-600 leading-relaxed">
            Trowel hadir sebagai partner pembangunan Anda. Kami mengutamakan
            kualitas, ketepatan waktu, dan transparansi biaya untuk setiap
            proyek yang kami kerjakan.
          </p>
        </div>
      </section>

      {/* FooterRRR */}
      <footer id="kontak" className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-xl font-semibold text-white mb-4">Trowel</h4>
          <p>Jasa Bangunan Profesional & Terpercaya</p>
          <p className="mt-2 text-sm">© 2026 Trowel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
