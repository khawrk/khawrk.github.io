import Header from './components/Header'
import ContactBar from './components/ContactBar'
import NavBar from './components/NavBar'
import Home from './components/Home/Home'
import './App.css'

function App() {


  return (
    <>
      <Header />
      <ContactBar />
      <NavBar />
      <main className='mt-20 px-10'>
        <Home />
      </main>
    </>
  )
}

export default App
