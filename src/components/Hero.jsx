import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"

const Hero = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 })

  useGSAP(() => {
    const heroSplit = new SplitText('.title', { type: 'chars, words', });
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines', });

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {
      opacity:0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.3,


    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.08,
      delay: 2,

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

    const startValue = isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? '120% top' : 'bottom top'

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'video',
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    
    });
    

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };

 


    gsap.from('.right-leaf', {
      x: 100,
      opacity: 0,
      delay: 2.5


    })

    gsap.from('.arrow', {
      opacity:0,
      y:-60,
      delay: 4,
      yoyo:true,
      repeat:-1,


    })


    gsap.from('.left-leaf', {
      x: -100,
      opacity: 0,
      delay: 3


    })
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
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
        <img src="/images/arrow.png" alt="arrow" className="arrow" />

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
      <div className="video absolute inset-0">
        <video src="/videos/output.mp4"
          ref={videoRef}
          muted
          playsInline
          preload="auto"

        >


        </video>

      </div>

    </>
  )
}

export default Hero