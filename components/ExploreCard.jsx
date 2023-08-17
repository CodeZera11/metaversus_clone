"use client";

import styles from "@/styles";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={`world-${index + 1}`}
      className="absolute w-full h-full object-cover rounded-[24px]"
      fill
    />

    {active !== id ? (
      <h3
        className={
          "font-semibold sm:text-[26px] text-[18px] text-secondary-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]"
        }
      >
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col rounded-b-[24px] bg-black/30">
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Enter Metaverse
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
