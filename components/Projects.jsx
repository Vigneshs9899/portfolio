import { assets, projectsData } from "@/assets/assets";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import React from "react";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-sans text-accent"
      >
        Mock builds, real learnings
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-sans text-heading"
      >
        Code Experiments
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-sans text-textPrimary"
      >
        A bunch of mock projects where I played around with code, design, and
        functionality.
      </motion.p>

      <motion.div
        id="projects"
        className="w-full px-[12%] py-20 scroll-mt-20 bg-zinc-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* headings */}
        <InfiniteMovingCards
          items={projectsData}
          direction="right"
          speed="slow"
          pauseOnHover
        />
      </motion.div>
    </motion.div>
  );
};


export default Projects;
