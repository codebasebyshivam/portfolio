"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhatIBringToYourTeam() {
  const items = [
    {
      title: "Full-Stack Expertise",
      description:
        "End-to-end development capabilities from database design to user interface implementation with MERN stack proficiency.",
    },
    {
      title: "Real-Time Solutions",
      description:
        "Experience building live features using WebSocket and Redis for modern, interactive applications.",
    },
    {
      title: "Problem-Solving Mindset",
      description:
        "Passionate about tackling real-world challenges with efficient, scalable solutions and clean architecture.",
    },
    {
      title: "Continuous Learning",
      description:
        "Committed to staying current with industry trends and expanding technical knowledge through DSA and system design.",
    },
  ];

  return (
    <section className="bg-[#121212] text-white py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-semibold text-[#FFD700] mb-12"
          >
            What I Bring to Your Team
          </motion.h2>

          <div className="flex flex-col gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#2A2A2A] rounded-2xl p-6 shadow-lg hover:bg-[#3A3A3A] transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN (IMAGE / ILLUSTRATION) */}
       {/* Right Side Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center"
      >
        <img
          src="/WhatBringToYourTeam-setup.png"
          alt="Team Collaboration"
          className="max-w-md rounded-2xl shadow-lg"
        />
      </motion.div>
      </div>
    </section>
  );
}
