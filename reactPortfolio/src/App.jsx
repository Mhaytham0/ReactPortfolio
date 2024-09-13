// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import PortfolioPic from './components/portfolio-pic/portfolio-pic'
import AboutMe from './components/about-me/about-me'
import ColorSchemesExample from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Skill from './components/skills/skills'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ColorSchemesExample/>
      <PortfolioPic/>
      <AboutMe/>
      <Skill/>
      <Footer/>
      
    </>
  )
}

export default App
