"use client";
import { motion } from "framer-motion";
import { Zap, Database, Api } from "lucide-react";

const technologies = [
    {
        name: "WebSocket",
        description:
            "Real-time bidirectional communication for live features like chat systems, notifications, and collaborative tools.",
        // icon: <Zap className="w-5 h-5 text-gray-900" />,
    },
    {
        name: "Redis",
        description:
            "In-memory caching solutions for performance optimization and session management in high-traffic applications.",
        // icon: <Database className="w-5 h-5 text-gray-900" />,
    },
    {
        name: "REST API",
        description:
            "Designing and implementing RESTful services with proper authentication, validation, and error handling.",
        // icon: <Api className="w-5 h-5 text-gray-900" />,
    },
];

export default function Technologies() {
    return (
        <section
            id="technologies"
            className="relative bg-gradient-to-b from-[#1e1b1a] to-[#0f0e0e] py-20 px-6 md:px-10 lg:px-20"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('/technologies-setup.png')",
                }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/80 z-10"></div>


            <div className="relative z-20 max-w-6xl mx-auto">
                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-[#F5D547] mb-12 text-center"
                >
                    Advanced Technologies
                </motion.h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative bg-neutral-900 text-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-yellow-500/20 transition-all duration-300"
                        >
                            {/* Yellow top bar */}
                            <div className="absolute top-0 left-0 w-full h-3 bg-[#F5D547]" />

                            {/* Circle icon */}
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#F5D547] w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                                {/* {tech.icon} */}
                            </div>

                            {/* Card content */}
                            <div className="p-8 pt-10 text-center">
                                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                                <p className="text-gray-300 text-base leading-relaxed">{tech.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
