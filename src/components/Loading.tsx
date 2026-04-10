import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-dark-bg flex flex-col items-center justify-center gap-6">
      {/* Logo / Initial */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 rounded-full bg-orange-text flex items-center justify-center"
      >
        <span className="text-2xl font-bold text-dark-bg">K</span>
      </motion.div>

      {/* Loading bar */}
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ 
            repeat: Infinity, 
            duration: 1,
            ease: "easeInOut"
          }}
          className="w-full h-full bg-orange-text"
        />
      </div>

      {/* Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-white/50 text-sm tracking-widest uppercase"
      >
        Loading
      </motion.p>
    </div>
  )
}

export default Loading
