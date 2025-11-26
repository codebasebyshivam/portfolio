"use client";

import { motion } from 'framer-motion'

const projects = [
  {title: 'Project One', desc: 'Short description', link: '#'},
  {title: 'Project Two', desc: 'Short description', link: '#'}
]

export default function Projects(){
  return (
    <section id="projects" className="mt-16">
      <motion.div initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:0.6}}>
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="p-4 border rounded-lg hover:shadow">
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm mt-2">{p.desc}</div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}