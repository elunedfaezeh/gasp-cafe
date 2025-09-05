import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const Hero = () => {

  useGSAP(() => {
    const heroSplit = new SplitText('.title', { type: 'chars, words', });
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines', });

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.08

    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.08,
      delay: 1,

    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })
      .to('.right-leaf', { y: 400 }, 0)
      .to('.left-leaf', { y: -400 }, 0)

    gsap.from('.right-leaf', {
      x: 100,
      opacity:0,
      delay:1.5


    })

    gsap.from('.left-leaf', {
      x: -100,
      opacity:0,
      delay:2
      

    })
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title"> MINTED</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Refreshing. Natural. Unique.</p>
              <p className="subtitle">
                Taste the <br /> Essence of Nature
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Discover handcrafted drinks infused with fresh herbs,
                vibrant flavors, and a touch of creativity — made to refresh
                your soul.
              </p>
              <a href="#cocktails">Explore drinks</a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Hero