import HomeBg from "./HomeBg"
import HomeLaptop from '../../assets/HomeAsset.svg'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="text-default-text-color relative h-auto mx-[1rem]">
      <HomeBg />
      <div className="relative z-10 p-4 text-default-text-color flex flex-col justify-center">
        <div className="flex flex-col w-full gap-4">
          <motion.h2 initial={{ y: '-300px', opacity: 0 }} animate={{ y: "10px", opacity: 1 }} transition={{ duration: 0.75 }}>
            <h2 className="sm:text-4xl text-xl font-bold mb-4 text-orange-text ">Full-stack Development</h2>
          </motion.h2>
          <motion.h2 initial={{ y: '-300px', opacity: 0 }} animate={{ y: "10px", opacity: 1 }} transition={{ duration: 0.75, delay: 1 }}>
            <h2 className="sm:text-4xl text-xl font-bold mb-4 relative right-[20%]">Website Designer</h2>
          </motion.h2>
          <motion.h2 initial={{ y: '-400px', opacity: 0 }} animate={{ y: "10px", opacity: 1 }} transition={{ duration: 0.75, delay: 2 }}>
            <h2 className="sm:text-4xl text-xl font-bold mb-4 relative left-[10%]">Web3 Researcher</h2>
          </motion.h2>
        </div>
        <div className="flex justify-center">
          <img src={HomeLaptop} alt="" className="w-[400px]" />
        </div>
      </div>
    </div >
  )
}

export default Home