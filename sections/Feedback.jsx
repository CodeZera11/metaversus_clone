"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Image from "next/image";
import { TypingText } from "@/components/CustomTexts";

const Feedback = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col lg:flex-row mx-auto items-center justify-center`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.5, 1)}
          className={`flex flex-col flex-[0.5] lg:max-w-[370px] justify-center items-center mx-auto gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative `}
        >
          <div className={"feedback-gradient"} />
          <div className={"flex flex-col"}>
            <h1 className="text-white sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] font-bold">
              Samantha
            </h1>
            <p
              className={
                "mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white"
              }
            >
              Founder Metaversus
            </p>
            <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
              “With the development of today's technology, metaverse is very
              useful for today's work, or can be called web 3.0. by using
              metaverse you can use it as anything”
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.8, 1)}
          className={"relative flex-1 flex justify-center items-center"}
        >
          <Image
            src={"/feedback-1.png"}
            alt={"feedback image"}
            width={2000}
            height={2000}
            className={
              "rounded-[24px] w-[800px] h-[480px] object-cover border-[1px] border-[#6A6A6A]"
            }
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
