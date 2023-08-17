"use client";

import { TitleText, TypingText } from "@/components/CustomTexts";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-row lg:flex-col gap-8 mx-auto`}
      >
        <TypingText
          title={"| People in the World"}
          textStyles={"text-center"}
        />
        <TitleText
          title={
            <>
              Track friends around you and
              <br /> invite them to play together in
              <br /> the same world
            </>
          }
          textStyles={"text-center"}
        />

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={`relative mt-[68px] flex w-full h-[550px]`}
        >
          <Image
            src={"/map.png"}
            alt={"World Map"}
            width={1000}
            height={1000}
            className={`w-full h-full object-cover`}
          />

          <motion.div
            variants={fadeIn("down", "tween", 0.5, 1)}
            className={`absolute top-10 left-[10%] w-[70px] height-[70px] p-[6px] rounded-full bg-[#5D6680]`}
          >
            <Image
              src={"/person-1.png"}
              alt={"person-1"}
              width={70}
              height={70}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("down", "tween", 0.5, 1)}
            className={`absolute bottom-20 right-20 w-[70px] height-[70px] p-[6px] rounded-full bg-[#5D6680]`}
          >
            <Image
              src={"/person-2.png"}
              alt={"person-2"}
              width={70}
              height={70}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("down", "tween", 0.5, 1)}
            className={`absolute top-1/2 left-[45%] w-[70px] height-[70px] p-[6px] rounded-full bg-[#5D6680]`}
          >
            <Image
              src={"/person-3.png"}
              alt={"person-3"}
              width={70}
              height={70}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className={`absolute top-1/2 left-[15%] w-[200px] h-[100px] p-[6px] rounded-[24px] overflow-hidden bg-[#5D6680]`}
          >
            <Image
              src={"/map_card-1.png"}
              alt={"person-3"}
              width={200}
              height={100}
              className={" relative w-[200px] h-[88px] rounded-[24px]"}
            />

            <TypingText
              title={"The Upside Down"}
              textStyles={
                "absolute bottom-[10px] left-4 text-white text-[15px]"
              }
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className={`absolute top-[15%] right-[25%] w-[200px] h-[100px] p-[6px] rounded-[24px] overflow-hidden bg-[#5D6680]`}
          >
            <Image
              src={"/world.jpeg"}
              alt={"person-3"}
              width={200}
              height={100}
              className={"relative w-[200px] h-[88px] rounded-[24px]"}
            />

            <TypingText
              title={"Hawkins Lab"}
              textStyles={
                "absolute bottom-[10px] left-4 text-white text-[15px]"
              }
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
