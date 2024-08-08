"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "web design",
    title: "andrew's journal",
    description:
      "Features advanced CSS techniques and responsive design, highlighting your ability to create visually appealing and adaptive interfaces.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }, { name: "Flexbox" }, { name: "Media Queries" }],
    image: "/assets/work/thumb1.png",
    live: "https://haartmuhn.github.io/andrews-journal/",
    github: "https://github.com/haartmuhn/andrews-journal",
  },
  {
    num: "02",
    category: "fullstack",
    title: "sky watch",
    description:
      "An end-to-end application integrating front-end and back-end technologies, demonstrating comprehensive development skills.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }, { name: "API" }, { name: "Node.js" }, { name: "Express.js" }],
    image: "/assets/work/thumb2.png",
    live: "https://geovko.github.io/skyWatch/",
    github: "https://github.com/geovko/skyWatch",
  },
  {
    num: "03",
    category: "backend development | API",
    title: "weather machine",
    description:
      "A weather dashboard that retrieves and displays real-time weather data, highlighting your skills in server-side API development and integration.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }, { name: "API" }, { name: "Node.js" }, { name: "Express.js" }],
    image: "/assets/work/thumb3.png",
    live: "https://haartmuhn.github.io/weather-machine/#/current-location",
    github: "https://github.com/haartmuhn/weather-machine",
  },
  {
    num: "04",
    category: "progressive web applications",
    title: "sync note",
    description:
      "Features advanced CSS techniques and responsive design, highlighting your ability to create visually appealing and adaptive interfaces.",
    stack: [{ name: "CSS" }, { name: "JS" }, { name: "IndexedDB" }, { name: "Service Workers" }],
    image: "/assets/work/thumb4.png",
    live: "https://sync-note.onrender.com/",
    github: "https://github.com/haartmuhn/sync-note",
  },
  {
    num: "05",
    category: "JS development",
    title: "payroll watchdog",
    description:
      "A payroll tracker application demonstrating your skills in JavaScript for handling data processing and user interactions.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }],
    image: "/assets/work/thumb5.png",
    live: "https://haartmuhn.github.io/payroll-watchdog/",
    github: "https://github.com/haartmuhn/payroll-watchdog",
  },
  {
    num: "06",
    category: "backend development | SQL",
    title: "staff link",
    description:
      "An application for managing employee records using SQL for data storage and Node.js/Express.js for server-side functionality.",
    stack: [{ name: "JS" }, { name: "SQL" }, { name: "Node.js" }, { name: "Express.js" }],
    image: "/assets/work/thumb6.png",
    live: "",
    github: "https://github.com/haartmuhn/staff-link",
  },
  {
    num: "07",
    category: "backend development | NoSQL",
    title: "thought stream",
    description:
      "An API for a social networking application using NoSQL, demonstrating your ability to manage and scale data structures.",
    stack: [{ name: "JS" }, { name: "MongoDB" }, { name: "Node.js" }, { name: "Express.js" }],
    image: "/assets/work/thumb7.png",
    live: "",
    github: "https://github.com/haartmuhn/thought-stream",
  },
  {
    num: "08",
    category: "object-oriented programming",
    title: "logo genius",
    description:
      "A tool for generating custom SVG logos, highlighting your understanding of object-oriented programming principles and modular code design.",
    stack: [{ name: "JS" }, { name: "Node.js" }],
    image: "/assets/work/thumb8.png",
    live: "",
    github: "https://github.com/haartmuhn/logo-genius",
  },
  {
    num: "09",
    category: "frontend development | API",
    title: "byte write",
    description:
      "A personal blog that integrates web APIs to fetch and display content, demonstrating your skills in front-end development and API integration.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }, { name: "API" }, { name: "Node.js" }, { name: "Express.js" }],
    image: "/assets/work/thumb9.png",
    live: "https://byte-write.onrender.com/",
    github: "https://github.com/haartmuhn/byte-write",
  },
  {
    num: "10",
    category: "full-stack development",
    title: " game chaser",
    description:
      "A highly interactive front-end application, demonstrating your skills in building dynamic user interfaces and enhancing user experience.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }, { name: "SQL" }, { name: "Node.js" }, { name: "Express.js" }],
    image: "/assets/work/thumb10.png",
    live: "https://gamechaser.onrender.com/",
    github: "https://github.com/haartmuhn/GameChaser",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
