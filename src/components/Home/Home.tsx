import { motion } from 'framer-motion';

type Props = {
  current: string;
}

const Home = ({ current }: Props) => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center px-6">
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        {current === 'Home' && (
          <div className="flex flex-col items-center gap-8">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-white/50 font-light">
                Creative Developer
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
            >
              Building Digital
              <br />
              <span className="text-orange-text">Experiences</span>
            </motion.h1>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4"
            >
              {['Full-stack', 'Web Design', 'Web3'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 text-xs sm:text-sm text-white/80 border border-white/20 rounded-full backdrop-blur-sm bg-white/5"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex flex-col items-center gap-3"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-5 h-8 rounded-full border border-white/30 flex justify-center pt-2"
              >
                <motion.div 
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="w-1 h-1 rounded-full bg-white/60"
                />
              </motion.div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
