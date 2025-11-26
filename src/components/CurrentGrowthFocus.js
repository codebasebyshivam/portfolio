"use client";

import { motion } from "framer-motion";
import { Code, PlugZap, User2 } from "lucide-react";

export default function CurrentGrowthFocus() {
  const focusAreas = [
    {
    icon: <Code className="w-8 h-8 text-[#FFD700]  mx-auto" />,
      title: "Data Structures & Algorithms",
      description:
        "Mastering DSA fundamentals to solve complex problems efficiently and excel in technical interviews.",
      delay: 0.1,
    },
    {
      icon: <PlugZap className="w-8 h-8 text-[#FFD700]  mx-auto" />,
      title: "System Design",
      description:
        "Learning to architect large-scale distributed systems with focus on scalability, reliability, and maintainability.",
      delay: 0.3,
    },
    {
      icon: <User2 className="w-8 h-8 text-[#FFD700] mx-auto" />,
      title: "Career Advancement",
      description:
        "Preparing for high-growth tech opportunities in forward-thinking development teams.",
      delay: 0.5,
    },
  ];

  return (
    <section className="relative bg-[#121212] text-white py-20 px-6 lg:px-20 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#FFD700] mb-12"
        >
          Current Growth Focus
        </motion.h2>

        {/* Chevron Step Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {focusAreas.map((item, index) => (
            <div>
      
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: item.delay }}
              viewport={{ once: true }}
              className="relative bg-[#2A2A2A]  transition-colors duration-300 text-center  shadow-lg p-6"
            >
              {/* left arrow icon */}
              <div
                className="absolute top-0 left-4  h-full w-0 border-t-[40px] border-t-transparent border-b-[41px] border-b-transparent border-l-[20px] border-l-[#2A2A2A] transform -translate-x-4"
                style={{ borderLeftColor: "#121212" }}
              ></div>
              {/* right arrow icon */}
              <div
                className="absolute top-0 -right-10   h-full w-0 border-t-[40px] border-t-transparent  border-b-[41px] border-b-transparent border-l-[25px] border-l-[#2A2A2A]   transform -translate-x-4"
              ></div>
              {item.icon}
            </motion.div>

              <div className="flex flex-col items-center lg:items-start mt-4">
                <h3 class="text-xl font-semibold mb-2">{item.title}</h3>
                <p class="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
      
          ))}
        </div>
      </div>
    </section>
  );
}
