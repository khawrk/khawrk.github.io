import Header from './components/Header'
import ContactBar from './components/ContactBar'
import NavBar from './components/NavBar'
import Home from './components/Home/Home'
import Plus from './assets/Plus.svg'
import L from './assets/L.svg'
import './App.css'
import Slide from './components/Slide'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { useState, useEffect, useRef } from 'react'
import Experience from './components/Experience/Experience'
import Project from './components/Projects/Project'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useInView
} from "framer-motion";

type SectionProps = {
  children: React.ReactNode;
  id: string;
  current: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>,
  refElement: React.RefObject<HTMLDivElement>;
}

function Section({ children, id, refElement, setCurrent }: SectionProps) {
  const ref = refElement
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      setCurrent(id);
    }
  }, [isInView, id, setCurrent]);


  return (
    <motion.div
      ref={ref}
      id={id}
      style={{
        transform: isInView ? "none" : "translateX(-300px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      initial="hidden"
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, root: ref }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [end, setEnd] = useState<boolean>(false);
  const [current, setCurrent] = useState<string>("Home");
  const scrollRef = useRef(null)

  return (
    <>
      <main className='pt-5 sm:px-5 px-2 w-full h-[full] hide-scrollbar' id='Home' ref={scrollRef}>
        <Header />
        <ContactBar />
        <NavBar current={current} setCurrent={setCurrent} />
        <Section id='Home' current={current} setCurrent={setCurrent} refElement={scrollRef}>
          <Home />
        </Section>
        <Section id='About' current={current} setCurrent={setCurrent} refElement={scrollRef}>
          <About />
        </Section>
        <Section id='Projects' current={current} setCurrent={setCurrent} refElement={scrollRef}>
          <Project />
        </Section>
        <Section id='Experience' current={current} setCurrent={setCurrent} refElement={scrollRef}>
          <Experience />
        </Section>
        <Section id='Contact' current={current} setCurrent={setCurrent} refElement={scrollRef}>
          <Contact />
        </Section>
        <img src={Plus} alt="" className='fixed bottom-0 left-0 sm:w-[100px] w-[70px]' />
        {end ? <h5 className='cursor-pointer text-gray-text text-[14px]' onClick={() => setEnd(false)}>Back to the top</h5> : <></>}
        <img src={L} alt="" className="fixed bottom-0 right-0 sm:w-[110px] w-[70px]" />
      </main >
    </>
  )
}

export default App
