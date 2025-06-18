// app/work.jsx
import React, { useState } from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { workData } from '@/assets/assets';
import { motion } from "motion/react";

const Work = () => {
  const [visible, setVisible] = useState(3);
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setVisible(expanded ? 3 : workData.length);
    setExpanded(!expanded);
  };

  const items = workData.slice(0, visible).map((project) => ({
    title: project.title,
    description: project.description,
    link: project.link,
    image: project.bgImage,
  }));

  return (
    <section id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-sans text-accent">Real Projects, Real Impact</h4>
      <h2 className="text-center text-5xl font-sans text-heading">My Works</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-sans text-textPrimary">
        A peek at some of the things I’ve shipped while working on real teams and products.
      </p>
      <HoverEffect items={items} />
      {workData.length > 4 && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={handleToggle}
          className="cursor-pointer w-max flex items-center justify-center gap-2 border border-border rounded-full py-3 px-10 mx-auto mt-10 duration-500 font-sans text-textPrimary bg-accent hover:bg-accentHover"
        >
          {expanded ? 'Show Less' : 'Show More'}
        </motion.button>
      )}
    </section>
  );
};

export default Work;