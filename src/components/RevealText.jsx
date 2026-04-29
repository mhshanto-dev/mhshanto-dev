"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RevealText = ({ children, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const init = async () => {
      const { default: SplitType } = await import("split-type");
      const text = new SplitType(textRef.current, { types: "words" });
      
      gsap.from(text.words, {
        opacity: 0,
        filter: "blur(10px)",
        y: 20,
        stagger: 0.05,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      return () => {
        text.revert();
      };
    };

    const cleanupPromise = init();
    
    return () => {
      cleanupPromise.then(cleanup => cleanup && cleanup());
    };
  }, []);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default RevealText;
