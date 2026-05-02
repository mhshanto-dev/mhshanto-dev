"use client";

import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "CEO at TechFlow",
      content: "The attention to detail and ability to translate complex requirements into a seamless user experience was impressive. A true professional who delivers on time.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    {
      name: "Sarah Chen",
      role: "Product Designer",
      content: "Working with them was a game-changer for our project. Their technical expertise combined with a strong design sense is a rare find in the industry.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      name: "James Wilson",
      role: "Founder of StartupX",
      content: "Clean code, great communication, and exceptional problem-solving skills. They didn't just build what we asked for, they made it better with their suggestions.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    }
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-[120px]" id="testimonials">
      <div className="text-center mb-20">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
          Social Proof
        </span>
        <h2 className="text-h2 text-on-background mt-3">
          What Clients Say
        </h2>
        <p className="text-on-surface-variant/60 mt-4 max-w-lg mx-auto text-sm">
          Hear from the people and companies I've had the pleasure of working with.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="glass-card p-8 relative flex flex-col h-full hover:border-primary/30 transition-all duration-500 group"
          >
            <div className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white text-2xl">format_quote</span>
            </div>

            <p className="text-on-surface-variant/80 text-lg leading-relaxed mb-10 mt-4 italic">
              "{item.content}"
            </p>

            <div className="mt-auto flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-surface-container">
                <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-on-background leading-none mb-1">{item.name}</h4>
                <p className="text-xs text-on-surface-variant/60 uppercase tracking-wider">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
