'use client';

import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconLink,
  IconCloudUpload,
} from "@tabler/icons-react"; // Add new icons here
import { cn } from "@/lib/utils"; // Ensure this utility is available

const BentoSection = () => {
  return (
    <section className="bg-zinc-900 text-white py-20 px-6 w-full">
      <div className="w-full max-w-7xl mx-auto text-center">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg font-sans text-accent mb-2"
        >
          Crafting Digital Excellence
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl md:text-5xl font-sans mb-4 text-heading"
        >
          From Code to Impact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl mx-auto font-sans text-textPrimary mb-12"
        >
          Building powerful web experiences, blending frontend design, backend logic, and cross-functional insights.
        </motion.p>
      </div>

      <div className="w-full text-textPrimary">
        <BentoGrid className="w-full max-w-6xl mx-auto px-2 sm:px-6">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2 bg-surface border-border" : "bg-surface border-border text-textPrimary"}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

const Skeleton = () => (
  <div className="text-textPrimary flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />
);

const items = [
  {
    title: "Website Development",
    description: "HTML, CSS (Tailwind, Bootstrap), JavaScript, React.js, Next.js,Node.js, Python (Django),MERN",
    header: (
    <div className="relative w-full h-40 overflow-hidden rounded-xl">
      <Image
        src="/bento-image1.jpg" // Replace with your actual image path
        alt="Project Thumbnail"
        fill
        className="object-cover"
      />
    </div>
  ),
    icon: <IconClipboardCopy className="h-4 w-4 text-accent" />,
  },
  {
    title: "Databases",
    description: "MySQL, MongoDB and PostgreSQL for data management and storage.",
    header:  (
    <div className="relative w-full h-40 overflow-hidden rounded-xl">
      <Image
        src="/techstack-img.jpg" // Replace with your actual image path
        alt="Project Thumbnail"
        fill
        className="object-cover"
      />
    </div>
  ),
    icon: <IconFileBroken className="h-4 w-4 text-accent" />,
  },
  {
    title: "Cloud Platform",
    description: "Azure for scalable and secure cloud solutions.",
    header: (
    <div className="relative w-full h-40 overflow-hidden rounded-xl">
      <Image
        src="/deploy.jpg" // Replace with your actual image path
        alt="Project Thumbnail"
        fill
        className="object-cover"
      />
    </div>
  ),
    icon: <IconSignature className="h-4 w-4 text-accent" />,
  },
  {
    title: "Content Management",
    description: "WordPress for efficient content management.",
    header:  (
    <div className="relative w-full h-40 overflow-hidden rounded-xl">
      <Image
        src="/passion.jpg" // Replace with your actual image path
        alt="Project Thumbnail"
        fill
        className="object-cover"
      />
    </div>
  ),
    icon: <IconTableColumn className="h-4 w-4 text-accent" />,
  },
  {
    title: "UI/UX Design",
    description: "Figma, Adobe Illustrator, Canva for creating intuitive and engaging user interfaces.",
    header:  (
    <div className="relative w-full h-40 overflow-hidden rounded-xl">
      <Image
        src="/ui-ux.png" // Replace with your actual image path
        alt="Project Thumbnail"
        fill
        className="object-cover"
      />
    </div>
  ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-accent" />,
  },
  {
    title: "Continuous Learning",
    description: "Regularly upskilling via documentation, courses, and open-source contributions.",
    header:  (
    <div className="relative w-full h-40 overflow-hidden rounded-xl">
      <Image
        src="/learn.jpg" // Replace with your actual image path
        alt="Project Thumbnail"
        fill
        className="object-cover"
      />
    </div>
  ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-accent" />,
  },
  {
    title: "Data Visualization",
    description: "Microsoft PowerBI for insightful data representation.",
    header:  (
    <div className="relative w-full h-40 overflow-hidden rounded-xl">
      <Image
        src="/problem.jpg" // Replace with your actual image path
        alt="Project Thumbnail"
        fill
        className="object-cover"
      />
    </div>
  ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-accent" />,
  },
  {
    title: "API Integration",
    description: "REST API (Postman) for seamless data exchange.",
    header: (
    <div className="relative w-full h-40 overflow-hidden rounded-xl">
      <Image
        src="/api.jpg" // Replace with your actual image path
        alt="Project Thumbnail"
        fill
        className="object-cover"
      />
    </div>
  ),
    icon: <IconLink className="h-4 w-4 text-accent" />,
  },
  {
    title: "AI&ML Tools",
    description: "ChatGPT, Claude, Meta AI, and other tools for enhanced development.",
    header:  (
    <div className="relative w-full h-40 overflow-hidden rounded-xl">
      <Image
        src="/ai.jpg" // Replace with your actual image path
        alt="Project Thumbnail"
        fill
        className="object-cover"
      />
    </div>
  ),
    icon: <IconCloudUpload className="h-4 w-4 text-accent" />,
  },
  {
    title: "Collaboration & Communication",
    description: "Work efficiently with cross-functional teams using agile practices and clear communication.",
    header: (
    <div className="relative w-full h-40 overflow-hidden rounded-xl">
      <Image
        src="/social.jpg" // Replace with your actual image path
        alt="Project Thumbnail"
        fill
        className="object-cover"
      />
    </div>
  ),
    icon:<IconBoxAlignTopLeft className="h-4 w-4 text-accent" />,
  },
];

export default BentoSection;
