import Header from './components/Header'
import ContactBar from './components/ContactBar'
import NavBar from './components/NavBar'
import './App.css'

function App() {


  return (
    <>
      <Header />
      <ContactBar />
      <NavBar />
      <main className='mt-20'>
        <h1 className=' text-orange-text'>Test</h1>
      </main>
    </>
  )
}

export default App
