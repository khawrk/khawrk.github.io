import Header from './components/Header'
import ContactBar from './components/ContactBar'
import NavBar from './components/NavBar'
import Home from './components/Home/Home'
import Plus from './assets/Plus.svg'
import L from './assets/L.svg'
import './App.css'
import Loading from './components/Loading'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { useState, useRef, useEffect } from 'react'
import Experience from './components/Experience/Experience'
import Project from './components/Projects/Project'
import { Link } from "react-scroll";
import {
  motion,
  useInView, inView,
} from "framer-motion";

type SectionProps = {
  children: React.ReactNode;
  id: string;
}

function Section({ children, id }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      initial="hidden"
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, root: ref }}
      className='flex justify-center items-start w-full h-[100vh]'
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [end, setEnd] = useState<boolean>(false);
  const [current, setCurrent] = useState<string>("Home");
  const [isLoading, setIsLoading] = useState(true)

  const home: HTMLElement | null = document.getElementById('Home1')!;
  const about: HTMLElement | null = document.getElementById('About')!;
  const project: HTMLElement | null = document.getElementById('Projects')!;
  const experience: HTMLElement | null = document.getElementById('Experience')!
  const contact: HTMLElement | null = document.getElementById('Contact')!


  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 100) {
        setEnd(true)
      } else {
        setEnd(false)
      }
    }
    window.addEventListener('scroll', scroll)

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => {
      window.removeEventListener('scroll', scroll)
      clearTimeout(timeout)
    }

  }, [current]);


  inView(home, () => {
    setCurrent('Home')
  }, { amount: 0.5 })
  inView(about, () => {
    setCurrent('About')
  }, { amount: 0.75 })
  inView(project, () =>
    setCurrent('Projects')
    , { amount: 0.75 })
  inView(experience, () => {
    setCurrent('Experience')
  }, { amount: 0.5 })
  inView(contact, () => {
    setCurrent('Contact')
  }, { amount: 0.5 })

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Header />
      <ContactBar />
      <NavBar current={current} setCurrent={setCurrent} />
      <main className='sm:px-5 px-2 w-full h-[full] hide-scrollbar' id='Home' >
        <Section id='Home1'  >
          <Home current={current} />
        </Section>
        <Section id='About'  >
          <About />
        </Section>
        <Section id='Projects'  >
          <Project />
        </Section>
        <Section id='Experience' >
          <motion.div id='Experience'>
            <Experience current={current} />
          </motion.div>
        </Section>
        <Section id='Contact'   >
          <Contact />
        </Section>
        <img src={Plus} alt="" className='fixed bottom-0 left-0 sm:w-[100px] w-[70px] z-20' />
        {end ? <Link to='Home'><h5 id='footer' className='h-[50px] pb-[1rem] cursor-pointer text-gray-text text-[14px] hover:text-white' onClick={() => setCurrent('Home')}>Back to the top</h5></Link> : <></>}
        <img src={L} alt="" className="fixed bottom-0 right-0 sm:w-[110px] w-[70px] z-20" />
      </main >
    </>
  )
}

export default App
