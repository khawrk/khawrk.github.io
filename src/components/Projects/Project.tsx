import Carousel from "./Carousel"
import { motion } from "framer-motion"

const Project = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto"
      >
        {/* Glass card */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10">
          <Carousel />
        </div>
      </motion.div>
    </div>
  )
}

export default Project
