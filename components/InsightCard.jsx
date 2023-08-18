"use client";

import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

const InsightCard = ({ index, imgUrl, title, subtitle }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className={"flex flex-row justify-between items-center p-10 gap-[50px]"}
    >
      <Image src={imgUrl} alt={title} width={200} height={200} />

      <div className="flex flex-col gap-5 max-w-[700px]">
        <h1 className={"text-white text-[32px] font-normal"}>{title}</h1>
        <p className={"text-[#888888] text-[18px] font-normal"}>{subtitle}</p>
      </div>

      <div
        className={
          "w-[70px] h-[70px] rounded-full flex items-center justify-center bg-black/20"
        }
      >
        <MoveUpRight size={30} className={"text-white"} />
      </div>
    </motion.div>
  );
};

export default InsightCard;
