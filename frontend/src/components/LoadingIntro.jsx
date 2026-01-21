import { motion } from "framer-motion";
import logo from "../assets/picture/logotrowel.png";

const LoadingIntro = ({ onFinish }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.8, duration: 0.8 }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 z-[9999] bg-[#210D01] flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-10">
        
        {/* LOGO */}
        <motion.img
          src={logo}
          alt="Gerong Aplikator"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-24 md:h-28"
        />

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-white/80 tracking-widest text-sm uppercase"
        >
          Building the Future
        </motion.p>

        {/* PROGRESS BAR */}
        <div className="w-64 h-[3px] bg-white/20 overflow-hidden rounded-full">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="h-full bg-orange-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingIntro;
