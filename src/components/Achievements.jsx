"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = (totalMiliseconds / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
};

const Achievements = () => {
  const stats = [
    {
      label: "Projects Completed",
      value: "40+",
      icon: "rocket_launch",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      label: "Course Success",
      value: "25+",
      icon: "school",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10"
    },
    {
      label: "Tech Mastered",
      value: "15+",
      icon: "terminal",
      color: "text-amber-400",
      bg: "bg-amber-400/10"
    },
    {
      label: "Years Experience",
      value: "02+",
      icon: "calendar_today",
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    }
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[100px] md:py-[120px]" id="achievements">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center group"
          >
            <div className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
              <span className={`material-symbols-outlined ${stat.color} text-3xl`}>
                {stat.icon}
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-on-background mb-2 font-heading">
              {stat.value}
            </h3>
            <p className="text-on-surface-variant/80 font-medium uppercase tracking-wider text-xs">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
