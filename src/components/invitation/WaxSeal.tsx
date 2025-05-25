import { motion } from "framer-motion";

export function WaxSeal() {
  return (
    <motion.div
      className="w-16 h-16 bg-red-900 rounded-full border-[4px] border-red-900 shadow-lg flex items-center justify-center text-white text-xl font-bold"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      🤍
    </motion.div>
  );
}
