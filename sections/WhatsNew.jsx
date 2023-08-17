"use client";

import { TitleText, TypingText } from "@/components/CustomTexts";
import NewFeature from "@/components/NewFeature";
import { newFeatures } from "@/constants";
import styles from "@/styles";
import { fadeIn, planetVariant, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const WhatsNew = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variant={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
      >
        <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
          <TypingText title={"| What's New?"} textStyles={"text-start"} />
          <TitleText
            title={
              <>
                What's new about <br /> Metaversus?
              </>
            }
          />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature, index) => (
              <NewFeature key={index} {...feature} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={planetVariant("right")}
          className={`${styles.flexCenter} flex-1`}
        >
          <Image
            src={"/whats-new.png"}
            alt="get-started-planet"
            className="object-contain w-[90%] h-[90%]"
            width={400}
            height={400}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
