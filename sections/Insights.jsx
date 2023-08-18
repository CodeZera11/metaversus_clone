"use client";

import { TitleText, TypingText } from "@/components/CustomTexts";
import InsightCard from "@/components/InsightCard";
import { insights } from "@/constants";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col mx-auto items-center justify-center`}
      >
        <TypingText title={"| Insight"} className={"text-center"} />
        <TitleText
          title={"Insight about metaverse"}
          className={"text-center"}
        />
        <div className={"mt-[50px] flex flex-col gap-[15px]"}>
          {insights.map((item, index) => (
            <InsightCard key={index} {...item} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
