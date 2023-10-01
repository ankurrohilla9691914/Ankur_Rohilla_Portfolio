"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 mt-40 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a software developer with a strong command of C++, JavaScript, and
        Java. My expertise spans a wide spectrum of technologies, including
        React, Redux, NextJS, GraphQL, Node.js, Express.js, MongoDB, Jest,
        Selenium, React Native, and Appium. My passion revolves around crafting
        user-friendly web and mobile applications, combining dynamic interfaces
        with robust backend systems. I'm an enthusiastic learner and enjoy
        collaborating with fellow tech enthusiasts. Let's team up to drive
        innovation in our projects.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing volleyball. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">3D rendering using Blender</span>.
      </p>
    </motion.section>
  );
}
