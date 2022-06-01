import './App.css'
import Navbar from './components/Layout/Navbar'
import Hero from './components/Layout/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Hero/>
       <About/>
       <Skills/>
       <Footer/>
    </div>
  )
}

export default App
