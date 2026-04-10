import HomeBg from "./HomeBg"
import { motion } from 'framer-motion';

type Props = {
  current: string;
}

const Home = ({ current }: Props) => {
  return (
    <div className="text-default-text-color relative h-[100vh] bg-transparent z-10 flex items-center justify-center">
      <HomeBg />
      <div className="relative z-10 px-6 sm:px-12 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        {current === 'Home' && (
          <div className="flex flex-col items-center gap-6">
            {/* Name / Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-sm sm:text-base tracking-[0.3em] uppercase text-white/60 font-light">
                Creative Developer
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance"
            >
              Building Digital
              <br />
              <span className="text-orange-text">Experiences</span>
            </motion.h1>

            {/* Subtitle / Skills */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed font-light"
            >
              Full-stack Development / Web Design / Web3 Research
            </motion.p>

            {/* CTA or scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 flex flex-col items-center gap-2"
            >
              <span className="text-xs tracking-widest uppercase text-white/40">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
              />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
