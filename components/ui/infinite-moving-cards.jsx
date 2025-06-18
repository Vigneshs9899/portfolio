"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current?.style.setProperty("--animation-duration", duration);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li key={item.name} className="shrink-0">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-[340px] max-w-full rounded-2xl border border-border bg-surface px-6 py-5 text-textPrimary shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="mb-4 w-full h-50 object-cover rounded-xl border border-border"
                />
              )}
              <blockquote>
                <span className="relative z-20 text-sm leading-relaxed text-textPrimary">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-col">
                  <span className="text-sm font-medium text-accent">
                    {item.name}
                  </span>
                  <span className="text-lg text-muted">{item.title}</span>
                </div>
              </blockquote>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
