import { motion } from "framer-motion";
import { easeOutExpo } from "../utils/anim";

const Loader = () => {
  return (
    <motion.div
      className="absolute inset-0 z-0 flex items-center justify-center bg-[#0D0E13]"
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 0,
      }}
      transition={{
        delay: 2.5,
      }}
    >
      <div className="relative flex h-[7.5vw] w-[7.5vw] min-w-20 items-center justify-center overflow-hidden rounded-full border border-[#e4e0db]/50">
        <motion.div
          className="absolute inset-0 bg-[#e4e0db]"
          style={{
            transformOrigin: "center bottom",
          }}
          initial={{
            y: "100%",
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 2,
            ease: easeOutExpo,
          }}
        />
        <span className="relative z-[2] text-xl font-semibold tracking-[0.14em] text-[#0D0E13] sm:text-3xl">
          SB
        </span>
      </div>
    </motion.div>
  );
};

export default Loader;
