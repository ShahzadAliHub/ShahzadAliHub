import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiPalette } from "react-icons/bi";
import { DiReact } from "react-icons/di";
import { FiServer, FiTrendingUp } from "react-icons/fi";
import { FaBullhorn, FaGoogle } from "react-icons/fa";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";

// ServiceCard component to modularize the code
const ServiceCard = ({ service }) => (
  <div
    className={`${
      service.id % 2 === 0 ? "bg-accent shadow-lg" : "bg-[#313131] shadow-md"
    } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
  >
    <div className="mb-4 text-center">
      <span className="inline-block text-5xl text-primary">{service.icon}</span>
    </div>
    <h2 className="mb-4 text-2xl font-semibold text-center">{service.title}</h2>
    <p className="text-neutral">{service.description}</p>
  </div>
);

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const services = [
    {
      id: 1,
      title: "Front-End Development",
      icon: <DiReact />,
      description:
        "I specialize in creating dynamic and responsive user interfaces using React and its ecosystem. Whether it's a single-page application or a complex web app, I can deliver a seamless front-end experience.",
    },
    {
      id: 2,
      title: "MERN Stack Development",
      icon: <FiServer />,
      description:
        "With expertise in Node.js, Express.js, React, and MongoDB, I can develop robust full-stack applications. From server-side logic to front-end rendering, I cover the complete MERN stack.",
    },
    {
      id: 3,
      title: "Web Design",
      icon: <BiPalette />,
      description:
        "I provide fully responsive web designs using HTML, CSS, Bootstrap, and Tailwind CSS. My designs are not only visually appealing but also optimized for performance and accessibility.",
    },
    {
      id: 4,
      title: "SEO",
      icon: <FiTrendingUp />,
      description:
        "Improve your website's visibility on search engines with my SEO services. I can help optimize your content, manage metadata, and ensure that your site ranks higher on search results.",
    },
    {
      id: 5,
      title: "Digital Marketing",
      icon: <FaBullhorn />,
      description:
        "Elevate your brand's presence with targeted digital marketing strategies. From social media campaigns to content marketing, I offer a comprehensive approach to increase your online reach.",
    },
    {
      id: 6,
      title: "Google My Business Management",
      icon: <FaGoogle />,
      description:
        "I can help you manage your Google My Business profile, ensuring that your business appears in local searches, collects reviews, and engages with customers effectively.",
    },
  ];

  return (
    <div className="py-20 parent">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">What I Provide</h3>
        <h1 className="text-4xl font-semibold text-center">
          My <span className="text-primary">Services</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services?.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
