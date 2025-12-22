import React from 'react'
import { motion, AnimatePresence } from "framer-motion";


export default function SkillBoxView({ index, skillgroup, heading }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={index} 
            className='rounded-xl border border-zinc-800 bg-zinc-900/50 p-6'>
            <h2 className="text-xl font-bold mb-6 text-white">{skillgroup.heading}</h2>
            <div className='space-y-4'>
                {skillgroup.skills.map((skill, idx) => {
                    return (
                        <div key={idx} className='space-y-1'>
                            <div className='flex justify-between text-sm mb-1'>
                                <span>{skill.title}</span>
                                <span className='text-zinc-400'>{`${skill.percentage}%`}</span>
                            </div>
                            <div className='h-2 bg-zinc-800 rounded-full overflow-hidden'>
                                <div className='h-full rounded-full bg-linear-to-r from-yellow-700 to-yellow-500' style={{ width: `${skill.percentage}%` }}>

                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </motion.div>
    )
}
