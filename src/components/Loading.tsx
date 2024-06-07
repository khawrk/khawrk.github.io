import { motion } from 'framer-motion'


const containerVariants = {
    start: {
        transition: {
            staggerChildren: 0.1
        }
    },
    end: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

const loadingCircle = {
    display: 'block',
    width: '20px',
    height: '20px',
    backgroundColor: '#FA8F2C',
    borderRadius: '50%',
}

const loadingCircleVariants = {
    start: {
        y: '0%'
    },
    end: {
        y: '100%'
    }
}

const loadingTransition: any = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
}


const Loading = () => {

    return (
        <motion.div variants={containerVariants} className="fixed w-full h-[100vh] flex justify-center items-center gap-2" initial="start" animate="end">
            <motion.h1 className=' text-orange-text' initial={{ y: '0%' }} animate={{ y: '100%' }} variants={loadingCircleVariants} transition={loadingTransition}>Loading</motion.h1>
            <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingTransition}></motion.span>
            <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingTransition}></motion.span>
            <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingTransition}></motion.span>
        </motion.div>
    )
}

export default Loading