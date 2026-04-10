import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-3xl mx-auto"
      >
        {/* Glass card */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-xs tracking-[0.2em] uppercase text-orange-text">About Me</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Emika Suntisumranwilai
            </h2>
            <p className="text-white/50 text-sm">AKA 0xkhaw in the web3 world</p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 text-white/70 text-sm sm:text-base leading-relaxed">
            <p>
              {"I'm a web3 researcher, product manager, and full-stack developer based in Vancouver, Canada."}
            </p>
            <p>
              Before my career transition to being a developer, I worked as an operation manager, product lead, research analyst, and founded three startups. I was part of incubator programs such as League of Innovator and FoundersBoost Vancouver.
            </p>
          </div>

          {/* Stats or highlights */}
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-orange-text">3+</div>
              <div className="text-xs text-white/50 mt-1">Startups Founded</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-orange-text">5+</div>
              <div className="text-xs text-white/50 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-orange-text">10+</div>
              <div className="text-xs text-white/50 mt-1">Projects Built</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
