import Angular from '../../assets/logos/Angular.svg'
import Bootstrap from '../../assets/logos/Bootstrap.svg'
import CSS from '../../assets/logos/CSS.svg'
import Figma from '../../assets/logos/Figma.svg'
import Git from '../../assets/logos/Git.svg'
import HTML from '../../assets/logos/HTML.svg'
import Javascript from '../../assets/logos/JavaScript.svg'
import NextJs from '../../assets/logos/nextjs.svg'
import NodeJs from '../../assets/logos/NodeJs.svg'
import Postgre from '../../assets/logos/Postgre.svg'
import Python from '../../assets/logos/Python.svg'
import React from '../../assets/logos/React.svg'
import SCSS from '../../assets/logos/SCSS.svg'
import Tailwind from '../../assets/logos/Tailwind.svg'
import TypeScript from '../../assets/logos/TypeScript.svg'
import { motion } from "framer-motion"
import { useState } from "react"
import Resume from '../../files/Emika_Suntisumranwilai_Resume_Feb_SoftwareEngineer.pdf'

const logos = [
  { src: Angular, name: 'Angular' },
  { src: Bootstrap, name: 'Bootstrap' },
  { src: CSS, name: 'CSS' },
  { src: Figma, name: 'Figma' },
  { src: Git, name: 'Git' },
  { src: HTML, name: 'HTML' },
  { src: Javascript, name: 'Javascript' },
  { src: NextJs, name: 'Next.js' },
  { src: NodeJs, name: 'Node.js' },
  { src: Postgre, name: 'PostgreSQL' },
  { src: Python, name: 'Python' },
  { src: React, name: 'React' },
  { src: SCSS, name: 'SCSS' },
  { src: Tailwind, name: 'Tailwind' },
  { src: TypeScript, name: 'TypeScript' }
];

type Props = {
  current: string;
}

const Experience = ({ current }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const listVariants = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.05
      }
    },
    hidden: { opacity: 0 }
  };

  const itemVariants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: { opacity: 0, scale: 0.8, y: 20 }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto"
      >
        {/* Glass card */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-6">
            <span className="text-xs tracking-[0.2em] uppercase text-orange-text">Skills</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Experience & Tools
            </h2>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 text-white/70 text-sm sm:text-base leading-relaxed mb-8">
            <p>
              My main expertise is in full-stack development and web3. Over the years, {"I've"} worked in various roles across industries with companies of all sizes.
            </p>
            <p>
              Want detailed work experience?{' '}
              <a 
                href={Resume} 
                download="Emika_Suntisumranwilai_Software_Engineer"
                className="text-orange-text font-medium hover:underline"
              >
                Download my resume
              </a>
            </p>
          </div>

          {/* Skills Grid */}
          {current === 'Experience' && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={listVariants}
              className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 gap-4 sm:gap-6"
            >
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="w-8 h-8 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" 
                  />
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-white/90 text-dark-bg text-xs font-medium whitespace-nowrap"
                    >
                      {logo.name}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default Experience
