import './App.css'
import Category from './components/Category/Category'
import Contact from './components/Contact/Contact'
import Gallery from './components/Gallery/Gallery'
import Hero from './components/Hero/Hero'
import Menu from './components/Menu/Menu'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Menu/>
      <Gallery/>
      <Contact/>
    </div>
  )
}

export default App
