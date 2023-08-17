"use client";

import styles from "@/styles";
import { rotate, slideIn, staggerContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className={`${styles.heroHeading}`}
          >
            Metaverse
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className={"flex flex-row justify-center items-center"}
          >
            <h1 className={styles.heroHeading}>Ma</h1>
            <div className={styles.heroDText} />
            <h1 className={styles.heroHeading}>Ness</h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <Image
            src={"/hero_cover.png"}
            alt="Hero_Cover"
            width={3000}
            height={2000}
            className="w-full sm:h-[400px] h-[500px] object-cover rounded-tl-[140px] z-10 relative -mt-[50px]"
          />

          <a href="#explore">
            <motion.div
              // variants={rotate(1.2)}
              className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10"
            >
              <Image
                src={"/stamp.png"}
                alt={"stamp"}
                width={495}
                height={497}
                className={
                  "object-contain sm:w-[155px] w-[100px] sm:h-[155px] h-[100px]"
                }
              />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
