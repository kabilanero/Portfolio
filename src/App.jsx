import './App.css'
import About from './Components/About/About'
import Achievements from './Components/Achievements/Achievements'
import Home from './Components/Home/Home'
import Location from './Components/Location/Location'
import Projects from './Components/Projects/Projects'

function App() {

  return (
    <>
      <div className='section' >
        
         <Home/>
         <About/>
         <Projects/>
         <Achievements/>
         <Location/>

      </div>
    </>
  )
}

export default App
