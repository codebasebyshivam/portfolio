"use client";

import { motion } from "framer-motion";


const skills = [
  {
    name: "MongoDB",
    description: "NoSQL database design, schema optimization, and efficient query management for scalable applications.",
    // icon: <Database className="w-6 h-6 text-gray-900" />,
  },
  {
    name: "Express.js",
    description: "Building robust REST APIs and middleware architecture for seamless backend operations.",
    // icon: <Server class: "w-6 h-6 text-gray-900" />,
  },
  {
    name: "React.js",
    description: "Creating dynamic, responsive user interfaces with modern component-based architecture.",
    // icon: <Atom className="w-6 h-6 text-gray-900" />,
  },
  {
    name: "Node.js",
    description: "Developing high-performance server-side applications with asynchronous programming.",
    // icon: <Code className="w-6 h-6 text-gray-900" />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-neutral-900 text-gray-200 py-20 px-6 md:px-10 lg:px-20"
    >
      <div className = "max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#FFD700] mb-12 text-center"
        >
          Core Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-neutral-800 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-[#FFD700] p-3 rounded-full flex items-center justify-center">
                  {/* {skill.icon} */}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{skill.name}</h3>
                <p className="text-gray-300 text-lg">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
