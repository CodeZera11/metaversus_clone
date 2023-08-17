"use client";

import { TypingText } from "@/components/CustomTexts";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { ArrowBigDown, ArrowDown } from "lucide-react";

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variant={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title={"| About Metaversus"} textStyles={"text-center"} />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-8 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it's really real, you can feel what you feel in this metaverse
          world, because this is really the{" "}
          <span className="font-extrabold text-white">
            madness of the metaverse
          </span>{" "}
          of today, using only{" "}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily explore the metaverse world you want, turn your dreams into
          reality. Let's{" "}
          <span className="font-extrabold text-white">explore</span> the madness
          of the metaverse by scrolling down
        </motion.p>

        <motion.div variants={fadeIn("up", "tween", 0.1, 1.2)}>
          <div
            className={
              "w-[70px] h-[70px] rounded-full bg-black/10 flex items-center justify-center mt-10 "
            }
          >
            <ArrowDown size={45} className="text-white " />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
