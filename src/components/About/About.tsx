import AboutBg from "./AboutBg"
import { motion } from 'framer-motion';
import Slide from "../Slide";

const About = () => {

  return (
    <div className="text-default-text-color relative sm:mx-[2.5rem] h-[100vh] bg-transparent z-10 flex items-center">
      <AboutBg />
      <Slide>
        <div className="relative w-full z-10 p-4 text-default-text-color h-[500px] flex flex-col justify-center gap-2 pt-10 sm:px-[2rem] xl:px-[15rem] pb-[5rem]">
          <div className="flex xl:justify-end justify-center mt-[5rem] text-gray-text">
            <p>AKA 0xkhaw in web3 world</p>
          </div>
          <div className="flex xl:self-end xl:justify-end justify-center w-full">
            <h2 id="fullname" className="text-[30px] sm:text-[36px] font-bold sm:self-end">
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">I'</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">m </span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">E</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">m</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">i</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">k</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">a </span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">S</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">u</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">n</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">t</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">i</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">s</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">u</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">m</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">r</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">a</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">n</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">w</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">i</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">l</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">a</span>
              <span className="hover:text-orange-text transition-all hover:translate-y-[5px] hover:relative hover:top-[-5px] ">i</span>
            </h2>
          </div>
          <div className="xl:self-end self-center right-0 flex flex-col gap-5 text-default-text-color sm:text-[16px] text-[14px]">
            <p className="w-[300px] sm:w-[70%] self-center xl:self-end">I’m a web3 researcher, product manager, and full-stack developer based in Vancouver, Canada.</p>
            <p className="w-[300px] sm:w-[70%] self-center xl:self-end">Before my career transition to being a developer, I worked as an operation manager, product lead, research analyst, and founded three startups and were part of startup incubator programs such as League of Innovator and FoundersBoost Vancouver.</p>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default About