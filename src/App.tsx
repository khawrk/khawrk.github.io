import Header from './components/Header'
import ContactBar from './components/ContactBar'
import NavBar from './components/NavBar'
import Home from './components/Home/Home'
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
        transform: isInView ? "none" : "translateY(60px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
      initial="hidden"
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, root: ref }}
      className='flex justify-center items-center w-full min-h-screen'
    >
      {children}
    </motion.div>
  );
}

// Video background component
function VideoBackground() {
  return (
    <div className="fixed inset-0 -z-50 w-screen h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dev-gen-video-bWJF3RE7rfWhBD99IdJJxs9i2nkw4h.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
    </div>
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
    }, 3000);

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
      <VideoBackground />
      <Header />
      <ContactBar />
      <NavBar current={current} setCurrent={setCurrent} />
      <main className='relative z-10 w-full hide-scrollbar' id='Home'>
        <Section id='Home1'>
          <Home current={current} />
        </Section>
        <Section id='About'>
          <About />
        </Section>
        <Section id='Projects'>
          <Project />
        </Section>
        <Section id='Experience'>
          <Experience current={current} />
        </Section>
        <Section id='Contact'>
          <Contact />
        </Section>
        {end && (
          <Link to='Home' className='z-[101] flex justify-center pb-8'>
            <h5 
              id='footer' 
              className='cursor-pointer text-white/50 text-sm hover:text-white transition-colors' 
              onClick={() => setCurrent('Home')}
            >
              Back to top
            </h5>
          </Link>
        )}
      </main>
    </>
  )
}

export default App
