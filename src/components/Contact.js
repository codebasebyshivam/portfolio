"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-[#121212] text-white py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center"
      >
        <img
          src="/contact-setup.png"
          alt="Handshake Illustration"
          className="max-w-md rounded-2xl shadow-lg"
        />
      </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#FFD700] mb-6 leading-snug">
            Let&apos;s Build Something <br /> Great Together
          </h2>

          <p className="text-gray-300 text-base leading-relaxed mb-10">
            I&apos;m actively seeking opportunities to contribute to meaningful
            projects with a forward-thinking development team. Whether you&apos;re
            building the next big platform or solving complex technical
            challenges, I&apos;d love to connect and explore how we can work
            together.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="mailto:your@email.com"
              className="bg-[#FFD700] text-[#121212] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#ffcc00] transition"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#FFD700] text-[#FFD700] font-semibold py-3 px-6 rounded-full hover:bg-[#FFD700] hover:text-[#121212] transition"
            >
              Connect on LinkedIn
            </a>
          </div>

          <hr className="border-gray-600 mb-6" />

          <p className="text-gray-400 text-sm">
            Based in <span className="text-white">Delhi, India</span> | Open to
            remote and hybrid opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
}
