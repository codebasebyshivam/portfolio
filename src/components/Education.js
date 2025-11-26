"use client";

import { motion } from "framer-motion";
import { GraduationCap, SquareCheck } from "lucide-react";

export default function EducationAndCertifications() {
  const education = [
    {
      degree: "BCA",
    institution: "Indira Gandhi National Open University (IGNOU)",
      period: "January 2019 - June 2024",
    },
    {
      degree: "Advance Diploma in Software Engineering",
      institution: "Wap Institute",
      period: "February 2019 - April 2021",
    },
    {
      degree: "Secondary Education",
      institution: "DAV Centenary Public School",
      period: "January 2007 - May 2018",
    },
  ];

  const certification = {
    title: "React Bootcamp Participation",
    description:
      "Completed intensive training in React.js development, covering advanced patterns and modern best practices.",
  };

  return (
    <section className="relative bg-[#1E1E1E] text-white py-20 px-6 lg:px-20 overflow-hidden">
      {/* Subtle Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10 bg-gradient-to-t from-[#222] to-[#111]"></div> */}
            {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/education-setup.png')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/90 z-10"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#F5D547] mb-12"
        >
          Education & Certifications
        </motion.h2>

        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Academic Background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-[#F5D547] font-semibold mb-6">
              Academic Background
            </h3>
            <ul className="space-y-5">
              {education.map((item, index) => (
                <li key={index}>
                  <p className="text-lg font-semibold text-white">
                    {item.degree}{" "}
                    <span className="text-gray-400">
                      - {item.institution}
                    </span>
                  </p>
                  <p className="text-gray-500 text-sm">{item.period}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Professional Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-[#F5D547] font-semibold mb-6">
              Professional Certifications
            </h3>
            <div className="bg-[#3c3100] bg-opacity-90 border border-[#F5D547] rounded-2xl p-6 shadow-lg flex items-start gap-4">
              <SquareCheck className="text-[#F5D547] w-8 h-8 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  {certification.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {certification.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
