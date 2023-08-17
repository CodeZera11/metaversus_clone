"use client";

import { fadeIn, navVariants, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import styles from "@/styles";
import { Menu, Search } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center`}
      >
        <Search size={24} className="text-white" />
        <h1 className="font-extrabold text-white text-[24px] leading-[30.24px]">
          METAVERSUS
        </h1>
        <Menu size={24} className="text-white" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
