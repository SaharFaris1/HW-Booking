import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './assets/component/Nav'
import HeroSection from './assets/component/HeroSection'
import Map from './assets/component/Map'
import Explore from './assets/component/Explore'
import Cards from './assets/component/Cards'
import Break from './assets/component/Break'
import Footer from './assets/component/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Nav/>
        <HeroSection/>
 <br /><br />
    <Explore/>
    <Map/>
<Cards/>
<Break/>
<Footer/>
       </div>
  )
}

export default App
