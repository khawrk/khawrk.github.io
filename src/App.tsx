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
import { motion, useScroll, useSpring, useInView } from "framer-motion";



function App() {
  const [end, setEnd] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true)
  const [current, setCurrent] = useState<string>("Home");

  function Section({ children, id, current }: any) {
    const ref = useRef(current);
    const isInView = useInView(ref, { once: false });

    if (ref.current) {
      setCurrent(ref.current.id)
    }

    return (
      <section ref={ref} id={id}>
        <span
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </span>
      </section>
    );
  }


  return (
    <>
      <Header modeToggle={setDarkMode} currentMode={darkMode} />
      <ContactBar />
      <NavBar current={current} setCurrent={setCurrent} />
      <main className='pt-10 sm:px-10 px-2 w-full h-[full]'>
        <Section id='Home'>
          <Slide delay={0.3}>
            <Home />
          </Slide>
        </Section>
        <Section id='About'>
          <Slide delay={0.5}>
            <About />
          </Slide>
        </Section>
        <Section id='Projects'>
          <Slide delay={0.5}>
            <Project />
          </Slide>
        </Section>
        <Section id='Experience'>
          <Slide delay={1}>
            <Experience />
          </Slide>
        </Section>
        <Section id='Contact'>
          <Slide delay={1}>
            <Contact />
          </Slide>
        </Section>
        <img src={Plus} alt="" className='fixed bottom-0 left-0 sm:w-[100px] w-[70px]' />
        {end ? <h5 className='cursor-pointer text-gray-text text-[14px]' onClick={() => setEnd(false)}>Back to the top</h5> : <></>}
        <img src={L} alt="" className="fixed bottom-0 right-0 sm:w-[110px] w-[70px]" />
      </main >
    </>
  )
}

export default App
