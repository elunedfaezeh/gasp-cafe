import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import ScrollH from './components/ScrollH'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
 <main>
    <Navbar/>
    <Hero/>
    <Cocktails/>
    <ScrollH/>
    <div className='h-dvh bg-black '></div>
 </main>
  )
}

export default App