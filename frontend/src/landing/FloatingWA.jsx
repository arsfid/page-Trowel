import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingWA = () => {
  const phoneNumber = "6282136522188";
  const text = "Halo Admin, saya ingin konsultasi proyek";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="
        fixed bottom-6 right-6 z-50
        bg-green-500 hover:bg-green-600
        text-white p-4 rounded-full shadow-xl
        flex items-center justify-center
        animate-pulse
      "
    >
      <MessageCircle size={28} />
    </motion.a>
  );
};

export default FloatingWA;
