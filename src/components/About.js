"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-neutral-900 text-gray-200 py-20 flex flex-col md:flex-row items-center justify-center"
    >
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0"
      >
        <img
          src="/about-setup.png"
          alt="About Shivam Sharma"
          className="rounded-lg shadow-lg w-4/5 md:w-3/4"
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 w-full px-6 md:px-12"
      >
        <h2 className="text-4xl font-bold text-[#FFD700] mb-8">About Me</h2>

        <p className="text-lg leading-relaxed mb-6">
          I’m a passionate <span className="font-semibold">MERN Stack Developer</span> with hands-on experience
          building scalable and efficient web applications. My core strength lies in working with
          <span className="font-semibold"> MongoDB</span>, <span className="font-semibold">Express.js</span>,{" "}
          <span className="font-semibold">React.js</span>, and <span className="font-semibold">Node.js</span>, along
          with real-time technologies like <span className="font-semibold">WebSocket</span> and caching systems like{" "}
          <span className="font-semibold">Redis</span>.
        </p>

        <p className="text-lg leading-relaxed mb-10">
          I’m deeply interested in solving real-world problems with clean code, efficient APIs, and scalable backend
          systems. I pay close attention to performance optimization, user experience, and system architecture.
        </p>

        <div className="border-l-4 border-[#F5D547] pl-4">
          <h3 className="text-2xl font-semibold text-[#FFD700] mb-2">Current Focus</h3>
          <p className="text-lg text-gray-300">
            Leveling up skills in Data Structures & Algorithms (DSA) and System Design to prepare for high-growth tech
            opportunities.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
