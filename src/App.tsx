import Header from './components/Header'
import ContactBar from './components/ContactBar'
import NavBar from './components/NavBar'
import Home from './components/Home/Home'
import Plus from './assets/Plus.svg'
import L from './assets/L.svg'
import './App.css'
import Slide from './components/Slide'
import About from './components/About/About'

function App() {

  return (
    <>
      <Header />
      <ContactBar />
      <NavBar />
      <main className='pt-20 px-10 w-full h-[90vh]'>
        {/* <section id='Home'>
          <Home />
        </section> */}
        <section id='About'>
          <Slide>
            <About />
          </Slide>
        </section>
        {/* <section id='Projects' className='w-full min-h-[100vh] text-default-text-color'>
          <Slide>
            <h1>Projects</h1>
          </Slide>
        </section> */}
        {/* <section id='Experience' className='w-full min-h-[100vh] text-default-text-color'>
          <Slide>
            <h1>Experience</h1>
          </Slide>
        </section> */}
        {/* <section id='Contact' className='w-full min-h-[100vh] text-default-text-color'>
          <Slide>
            <h1>Contact</h1>
          </Slide>
        </section> */}
        <img src={Plus} alt="" className='absolute bottom-0 left-0 w-[100px]' />
        <img src={L} alt="" className="absolute bottom-0 right-0 w-[110px]" />
      </main>

    </>
  )
}

export default App
