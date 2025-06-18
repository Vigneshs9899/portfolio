// components/ui/card-hover-effect.jsx
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

export const HoverEffect = ({ items, className = '' }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 ${className}`}>
      {items.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.span
            className="absolute inset-0 bg-accentHover rounded-3xl z-2"
            layoutId="hoverBackground"
            initial={false}
            animate={{ opacity: hoveredIndex === index ? 1 : 0, transition: { duration: 0.3 } }}
            style={{ pointerEvents: 'none' }}
          />
          <Card>
            {item.image && (
              <div className="h-48 w-full relative overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-full h-full transition-transform duration-500 ease-out group-hover:scale-110 rounded-xl"
                />
              </div>
            )}
            <CardTitle className='text-center text-heading text-lg'>{item.title}</CardTitle>
            <CardDescription className='text-center text-textPrimary text-sm'>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ children, className = '' }) => (
  <div className={`rounded-2xl w-full p-4 bg-surface border border-border group-hover:border-accentHover relative z-20 ${className}`}>
    <div className="relative z-50">{children}</div>
  </div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h4 className={`text-heading text-sm tracking-wide mt-4 ${className}`}>{children}</h4>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={`mt-2 text-textPrimary text-sm ${className}`}>{children}</p>
);
