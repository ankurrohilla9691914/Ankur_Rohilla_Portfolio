import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaNode, FaJava, FaHtml5, FaCss3 } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiJest,
  SiSelenium,
  SiRedux,
  SiCodingninjas,
  SiCplusplus,
} from "react-icons/si";
import { TbKarate } from "react-icons/tb";
import BuyZone from "@/public/BuyZone.png";
import JobHUnter from "@/public/JobHunter.jpeg";
import TaskManager from "@/public/TaskManager.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  ,
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    company: "Cvent",
    location: "Gurugram, India",
    description:
      "I held the role of a full-stack developer at Cvent, utilizing a comprehensive tech stack. My proficiency included JavaScript, TypeScript, React, GraphQL, Jest, Selenium, React Native, Appium, and the development of RESTful APIs.",
    icon: React.createElement(FaReact),
    date: "Jul 2022 - Sep 2023",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Cvent",
    location: "Gurugram, India",
    description:
      "During my 6-month Cvent internship, I significantly improved a crucial floorPlan feature, introducing CRUD functions and optimizing with Leaflet. I also enhanced user experience with an efficient copying mechanism, reducing response times by 40%.",
    icon: React.createElement(SiGraphql),
    date: "Jan 2022 - Jul 2022",
  },
  {
    title: "Teaching Assistant",
    company: "Coding Ninjas",
    location: "Delhi, India",
    description:
      "During my time at Coding Ninjas, I served as a mentor,helped over 50 students in tackling DSA challenges with C++. This role sharpened my problem-solving skills, deepened my DSA knowledge, and fueled my enthusiasm for technology and education.",
    icon: React.createElement(SiCodingninjas),
    date: "Mar 2020 - Jul 2020",
  },
] as const;

export const projectsData = [
  {
    title: "BuyZone",
    description:
      "The goal of this project is to replicate the core functionalities and design of an online shopping website, allowing users to browse products, and add items to the cart with responsive design for various screens to complete the purchase process.",
    tags: ["React", "Redux", "MetarialUI", "NodeJS", "ExpressJS", "MongoDB"],
    imageUrl: BuyZone,
    liveDemoUrl: "https://tiny-cowboy-boots-hare.cyclic.app",
    sourceCodeUrl: "https://github.com/ankurrohilla9691914/BuyZone",
  },
  {
    title: "Job Hunter",
    description:
      "React Native application allows users to search for jobs based on various criteria such as job type (Full-Time, Part-Time, Contract, Intern), location, keywords, and more. Users can view job details, qualifications, responsibilities, and easily apply for jobs.",
    tags: ["React Native", "Expo", "Rapid API"],
    imageUrl: JobHUnter,
    liveDemoUrl: "https://github.com/ankurrohilla9691914/JobHunter#demo-video",
    sourceCodeUrl: " https://github.com/ankurrohilla9691914/JobHunter",
  },
  {
    title: "Task Manager",
    description:
      "The MERN Todo List Application is a web-based task management system designed to help users organize their daily tasks efficiently. This application leverages the power of the MERN stack (MongoDB, Express.js, React.js, and Node.js) along with the Material-UI library to provide a user-friendly and responsive interface for managing multiple to-do lists.",
    tags: ["React", "MongoDB", "ExpressJS", "NodeJS", "MetarialUI"],
    imageUrl: TaskManager,
    liveDemoUrl: "https://github.com/ankurrohilla9691914/todoList",
    sourceCodeUrl: "https://github.com/ankurrohilla9691914/todoList",
  },
] as const;

export const programmingLanguages = [
  { tech: "C++", icon: React.createElement(SiCplusplus) },
  { tech: "Javascript", icon: React.createElement(SiJavascript) },
  { tech: "JAVA", icon: React.createElement(FaJava) },
] as const;

export const frontendTechnologies = [
  { tech: "HTML", icon: React.createElement(FaHtml5) },
  { tech: "CSS", icon: React.createElement(FaCss3) },
  { tech: "JavaScript", icon: React.createElement(SiJavascript) },
  { tech: "TypeScript", icon: React.createElement(SiTypescript) },
  { tech: "React", icon: React.createElement(FaReact) },
  { tech: "Redux", icon: React.createElement(SiRedux) },
  { tech: "NextJS", icon: React.createElement(SiNextdotjs) },
  { tech: "TailwindCSS", icon: React.createElement(FaCss3) },
  { tech: "GraphQL", icon: React.createElement(SiGraphql) },
  { tech: "Jest", icon: React.createElement(SiJest) },
  { tech: "Selenium", icon: React.createElement(SiSelenium) },
];

export const backendTechnologies = [
  { tech: "NodeJS", icon: React.createElement(FaNode) },
  { tech: "ExpressJS", icon: React.createElement(SiExpress) },
  { tech: "MongoDB", icon: React.createElement(SiMongodb) },
  { tech: "JAVA", icon: React.createElement(FaJava) },
  { tech: "Karate", icon: React.createElement(TbKarate) },
] as const;

export const mobileDevelopmentTechnologies = [
  { tech: "React Native", icon: React.createElement(FaReact) },
  { tech: "Appium", icon: React.createElement(FaReact) },
] as const;
