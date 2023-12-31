"use client";
import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "../Image Gallery/imageGallery";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl-px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl "> Skills</h3>
      <h3 className=" pt-5 absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        {" "}
        Hover over the skills for currency proficiency{" "}
      </h3>
      <div className="">
        <ImageGallery />
      </div>
    </motion.div>
  );
};

export default Skills;