import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import logo from "../assets/picture/logotrowel.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div className="space-y-5 flex items-center">
            <img src={logo} alt="Logo" className="h-12" />
            
          </div>

          {/* MENU */}
          <div>
            <h4 className="text-xs tracking-widest text-gray-400 mb-5">GERONG APLIKATOR</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Tentang Kami</li>
              <li>Pusat Bantuan</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-xs tracking-widest text-gray-400 mb-5">
              LAYANAN
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Pengecoran Jalan</li>
              <li>Pengecoran Lantai</li>
              <li>Epoxy Lantai</li>
              <li>Proyek Industri</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs tracking-widest text-gray-400 mb-5">
              HUBUNGI KAMI
            </h4>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-center gap-3">
                <Phone size={16} /> +62 812 3456 7890
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} /> info@gerongaplikator.com
              </li>
            </ul>
            
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-20 pt-6 border-t border-gray-200 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Gerong Aplikator. All rights reserved.
          </p>
          <p className="tracking-wide">
            Built with precision & professionalism
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
