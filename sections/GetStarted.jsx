"use client";

import { TitleText, TypingText } from "@/components/CustomTexts";
import StartSteps from "@/components/StartSteps";
import { startingFeatures } from "@/constants";
import styles from "@/styles";
import { fadeIn, planetVariant, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex lg:flex-row flex-col gap-8 mx-auto`}
      >
        <motion.div
          variants={planetVariant("left")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            src={"/get-started.png"}
            alt="get-started-planet"
            className="object-contain w-[90%] h-[90%]"
            width={400}
            height={400}
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className={`flex-[0.75] flex justify-center flex-col`}
        >
          <TypingText
            title={"| How Metaversus Works"}
            textStyles={"text-start"}
          />
          <TitleText
            title={
              <>
                Get started <br /> with just a few <br /> clicks
              </>
            }
            textStyles={"text-start"}
          />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps
                key={index}
                text={feature}
                number={`${index < 10 ? "0" : ""}${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
