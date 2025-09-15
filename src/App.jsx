import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import ScrollH from './components/ScrollH'
import { Helmet } from 'react-helmet';
import About from './components/About'
import Art from './components/Art'
import Menu from './components/Menu'
import Contact from './components/Contact'
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar />
      <Helmet>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Helmet>
      <Hero />
      <Cocktails />
      <About />
      <Menu/>
      <ScrollH />
      {/* <Art/> */}
      <Contact/>
    </main>
  )
}

export default App