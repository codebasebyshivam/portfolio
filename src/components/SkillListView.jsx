import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
export default function SkillListView() {
    return (
        <motion.div
            key="card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >SkillListView
        </motion.div>
    )
}
