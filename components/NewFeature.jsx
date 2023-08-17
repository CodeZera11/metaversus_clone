"use client";

import styles from "@/styles";
import Image from "next/image";

const NewFeature = ({ imgUrl, title, subtitle }) => {
  return (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
      >
        <Image
          src={imgUrl}
          width={100}
          height={100}
          alt={title}
          className={`w-1/2 h-1/2 flex items-center justify-center`}
        />
      </div>
      <h1 className="mt-[25px] text-white text-[24px] font-normal leading-[30px]">
        {title}
      </h1>
      <p className="flex-1 mt-[16px] text-[#B0B0B0] text-[16px] font-normal leading-[28.8px]">
        {subtitle}
      </p>
    </div>
  );
};

export default NewFeature;
