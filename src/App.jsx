import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import ScrollH from './components/ScrollH'
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
 <main>
    <Navbar/>
    <Helmet>
        {/* اندروید */}
        <meta name="theme-color" content="#000000" />
        {/* آیفون */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Helmet>
    <Hero/>
    <Cocktails/>
    <ScrollH/>
    <div className='h-dvh bg-black '></div>
 </main>
  )
}

export default App