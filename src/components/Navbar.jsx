import { useGSAP } from "@gsap/react"
import { navLinks } from "../../constants"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  useGSAP(() => {
    gsap.to("nav", {
      background: "linear-gradient(90deg, rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
      backdropFilter: "blur(16px)",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })

    gsap.from("nav", {
      y: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    })

    gsap.from("nav ul li", {
      y: -20,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.3,
    })
  })

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-3 flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 rounded-b-1xl shadow-lg border-b border-white/10">
      {/* لوگو */}
      <a
        href="#Home"
        className="flex items-center gap-3 font-extrabold text-2xl text-white tracking-wide hover:text-amber-50 transition-colors self-center md:self-auto"
      >
        <img src="/images/Logo.png" alt="logo" className="w-10 h-10" />
        <span >Lemint</span>
      </a>

      {/* لینک‌ها */}
      <ul className="flex flex-row flex-wrap justify-center md:justify-end gap-6 md:gap-10 text-lg font-medium w-full md:w-auto">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="relative text-white transition-all duration-300 hover:text-amber-50
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1
                after:bg-gradient-to-r after:from-green-800 after:to-emerald-500 after:rounded-full
                after:transition-all after:duration-500 hover:after:w-full"
            >
              {link.id}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
