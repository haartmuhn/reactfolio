"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Design",
    description:
      "Transform your ideas into stunning websites with modern design and responsive functionality. Using HTML, CSS, and JavaScript, I create visually appealing and user-friendly websites that adapt seamlessly across all devices. Whether you need a professional portfolio or a dynamic landing page, I’ll ensure your site meets the latest web standards and delivers an exceptional user experience.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Empower your applications with robust back-end solutions. I offer expertise in Node.js and Express.js for server-side development, along with experience in both SQL and NoSQL databases. Whether you need API development, data management, or server-side logic, I can build scalable and efficient back-end systems that support your application's needs and ensure reliable performance.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Progressive Web Applications ",
    description:
      "Create cutting-edge progressive web applications that offer a native app-like experience on the web. Utilizing service workers and offline capabilities, I build PWAs that work seamlessly across various devices and network conditions. With features like offline access and push notifications, I can help you deliver a compelling and reliable user experience that keeps your audience engaged and connected.",
    href: "/contact",
  },
  {
    num: "04",
    title: "APIs and Data Integration",
    description:
      "Enhance your applications with seamless API integration. I can connect your front-end to third-party APIs and server-side APIs, enabling functionalities such as data retrieval, user authentication, and more. With experience in integrating diverse data sources, I ensure smooth and reliable interactions between your application and external services, enhancing its overall capability and user experience.",
    href: "/contact",
  },
  {
    num: "05",
    title: "Full-Stack Development",
    description:
      "Deliver comprehensive solutions with full-stack development services. Combining front-end and back-end technologies, I build end-to-end applications that are both functional and efficient. From crafting dynamic user interfaces to developing robust server-side logic, I handle all aspects of your project to ensure a cohesive and seamless experience. Let me bring your complete application vision to life with expertise in the MERN stack and beyond.",
    href: "/contact",
  },
  {
    num: "06",
    title: "Frontend Development",
    description:
      "Build engaging and interactive user interfaces with React. I specialize in single-page applications (SPAs) that offer a smooth and dynamic user experience. From managing state with Redux to crafting reusable components, I use the latest React technologies to bring your front-end vision to life. Let me help you create high-performance applications that stand out, ensuring both functionality and visual appeal. With a focus on user-centric design and performance optimization.",
    href: "/contact",
  },
  
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
