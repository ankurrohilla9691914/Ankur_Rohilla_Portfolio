"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  frontendTechnologies,
  backendTechnologies,
  mobileDevelopmentTechnologies,
  programmingLanguages,
} from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="mb-6 mt-6 text-lg font-bold"> Programming Languages</div>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {programmingLanguages.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            
            custom={index}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="mr-3">{skill.icon}</div>
              {skill.tech}
            </div>
          </motion.li>
        ))}
      </ul>
      <div className="mb-6 mt-6 text-lg font-bold"> Frontend Expertise</div>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {frontendTechnologies.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            
            custom={index}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="mr-3">{skill.icon}</div>
              {skill.tech}
            </div>
          </motion.li>
        ))}
      </ul>

      <div className="mb-6 mt-6 text-lg font-bold"> Backend Expertise</div>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {backendTechnologies.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
          
            custom={index}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="mr-3">{skill.icon}</div>
              {skill.tech}
            </div>
          </motion.li>
        ))}
      </ul>
      <div className="mb-6 mt-6 text-lg font-bold">
        Mobile Development Expertise
      </div>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {mobileDevelopmentTechnologies.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
        
            custom={index}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="mr-3">{skill.icon}</div>
              {skill.tech}
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
