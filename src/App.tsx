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
import { useState } from 'react'
import Experience from './components/Experience/Experience'

function App() {
  const [end, setEnd] = useState<boolean>(false);

  return (
    <>
      <Header />
      <ContactBar />
      <NavBar />
      <main className='pt-20 sm:px-10 px-2 w-full h-[90vh]'>
        {/* <section id='Home'>
          <Home />
        </section> */}
        {/* <section id='About'>
          <Slide>
            <About />
          </Slide>
        </section> */}
        {/* <section id='Projects'>
          <Slide>
            <h1>Projects</h1>
          </Slide>
        </section> */}
        <section id='Experience'>
          {/* <Slide> */}
            <Experience />
          {/* </Slide> */}
        </section>
        {/* <section id='Contact' >
          <Slide>
            <Contact />
          </Slide>
        </section> */}
        <img src={Plus} alt="" className='absolute bottom-0 left-0 sm:w-[100px] w-[70px]' />
        {end ? <h5 className='cursor-pointer text-gray-text text-[14px]' onClick={() => setEnd(false)}>Back to the top</h5> : <></>}
        <img src={L} alt="" className="absolute bottom-0 right-0 sm:w-[110px] w-[70px]" />
      </main>
    </>
  )
}

export default App
