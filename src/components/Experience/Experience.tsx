import ExperienceBg from "./ExperienceBg"
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
import { stagger, animate, motion } from "framer-motion"
import { useEffect, useState } from "react"
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

const Experience = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const listVariants = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.2,
                staggerChildren: 0.1
            }
        },
        hidden: { opacity: 0, scale: 0.8 }
    };

    const itemVariants = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 }
    };

    return (
        <div className="text-default-text-color relative sm:mx-[2.5rem]">
            <ExperienceBg />
            <div className="relative w-full z-10  text-default-text-color h-[500px] flex flex-col justify-center md:pt-[9rem] sm:pt-10 sm:px-[2rem] xl:px-[15rem]">
                <div className="flex flex-col gap-2 self-center w-[90%]">
                    <h6 className=" text-gray-text sm:text-[12px] text-[10px]">Knowledge is of no value unless you put it into practice</h6>
                    <h1 className=" text-white md:text-[30px] text-[18px] font-bold">Skills and Work Experience</h1>
                    <p className=" text-default-text-color sm:text-[14px] text-[12px]">My main expertise and interest is in full-stack development and web3.</p>
                    <p className=" text-default-text-color sm:text-[14px] text-[12px]">For the past years, I’ve been working in various roles across industries with companies of various sizes
                        I’d call myself a still ‘jack of all trades’ turning a professional developer</p>
                    <p className=" text-default-text-color text-[14px]">Want to get my detailed work experience? <span className=" text-orange-text font-bold cursor-pointer"><a href={Resume} download="Emika_Suntisumranwilai_Software_Engineer">Download my resume</a></span> </p>
                </div>
                <div className="flex mt-10">
                    <motion.ul
                        initial="hidden"
                        animate="visible"
                        variants={listVariants}
                        className="list-none flex flex-row gap-4 flex-wrap justify-center"

                    >
                        {logos.map((logo, index) => (
                            <motion.li onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)} key={index} variants={itemVariants} className="relative">
                                <img src={logo.src} alt={logo.name} className="md:w-[85px] md:h-[85px] w-[35px] h-[35px] self-center" />
                                {hoveredIndex === index && (
                                    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-auto px-2 h-[25px] self-center rounded-lg bg-gray-text bg-opacity-90 text-white text-center">
                                        {logo.name}
                                    </div>
                                )}
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>

        </div>
    )
}

export default Experience