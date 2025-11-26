"use client";

import { motion } from "framer-motion";
import { Code2, Users, Gauge, Network } from "lucide-react";

export default function DevelopmentPhilosophy() {
  const philosophies = [
    {
      icon: <Code2 className="w-10 h-10 text-[#FFD700]" />,
      title: "Clean Code",
      description:
        "Writing maintainable, readable code that follows best practices and industry standards for long-term project success.",
    },
    {
      icon: <Gauge className="w-10 h-10 text-[#FFD700]" />,
      title: "Performance Optimization",
      description:
        "Constantly improving application speed, reducing load times, and ensuring efficient resource utilization.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#FFD700]" />,
      title: "User Experience",
      description:
        "Prioritizing intuitive interfaces and smooth interactions that delight users and drive engagement.",
    },
    {
      icon: <Network className="w-10 h-10 text-[#FFD700]" />,
      title: "System Architecture",
      description:
        "Designing scalable, modular systems that can grow with business needs and handle increasing complexity.",
    },
  ];

  return (
    <section className="bg-[#1E1E1E] text-white py-20 px-6 lg:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-[#FFD700] mb-16"
      >
        Development Philosophy
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {philosophies.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex items-start gap-6"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
