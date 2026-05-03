"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalMilisecondsStep = Math.abs(Math.floor(duration * 1000 / end));
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, totalMilisecondsStep);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  const stats = [
    { label: "Completed Projects", value: "30", suffix: "+", icon: "task_alt" },
    { label: "Satisfied Clients", value: "15", suffix: "+", icon: "groups" },
    { label: "Lines of Code", value: "50", suffix: "k+", icon: "data_object" },
    { label: "Cups of Coffee", value: "200", suffix: "+", icon: "coffee" },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[80px]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center group"
          >
            <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center mx-auto mb-4 border border-outline-variant/10 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500">
              <span className="material-symbols-outlined text-primary">{stat.icon}</span>
            </div>
            <div className="text-3xl md:text-4xl font-black text-on-background mb-1">
              <Counter value={stat.value} />
              <span className="text-primary">{stat.suffix}</span>
            </div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
