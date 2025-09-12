import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollH = () => {
  const scrollRef = useRef();
  const textRefs = useRef([]);

  useGSAP(() => {
    const circles = gsap.utils.toArray(scrollRef.current.children).filter(
      (el) => el.classList.contains("circle")
    );

    // انیمیشن دایره‌ها
    circles.forEach((circle, i) => {
      gsap.fromTo(
        circle,
        { x: -900, opacity: 0 },
        {
          x: 130 * (i + 1),
          opacity: 1,
          rotation: 360,
          scale: 2.3,
          borderRadius: "40% 60% 70% 30% / 40% 30% 70% 60%",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: circle,
            start: "bottom bottom",
            end: "top 20%",
            scrub: 5,
          },
        }
      );
    });

    // انیمیشن متن‌ها (پراکنده)
    textRefs.current.forEach((txt, i) => {
      gsap.fromTo(
        txt,
        { y: 50, opacity: 0 },
        {
          opacity: 1,
          x:-2,
          repeat:-1,
          yoyo:true,
          y:2,
          border:1,
          opacity: 1,
          borderRadius: "40% 60% 70% 30% / 40% 30% 70% 60%",

          duration: 1.5,
          delay: i * 0.3, // یکی یکی بیان
          scrollTrigger: {
            trigger: scrollRef.current,
            start: "top 40%",
            end: "top 20%",
          },
        }
      );
    });
  }, { scope: scrollRef });

  return (
    <main className="h-[100vh] flex flex-col items-center relative bg-black pt-25">
      <div className="mt-20 space-y-0 h-[150vh] relative" ref={scrollRef}>
        {/* دایره‌ها */}
        <div className="circle w-24 h-24 rounded-lg bg-[#F08B51]" />
        <div className="circle w-24 h-24 rounded-lg bg-[#541212]" />
        <div className="circle w-24 h-24 rounded-lg bg-[#C6D870]" />
        <div className="circle w-29 h-29 rounded-lg bg-[#FFE797]" />

        {/* متن‌ها (پراکنده) */}
        <h2
          ref={(el) => (textRefs.current[0] = el)}
          className="absolute top-[50px] left-1/2 -translate-x-1/2 md:text-8xl text-4xl font-bold p-2 text-white"
        >
          CHEERS!
        </h2>
        <h2
          ref={(el) => (textRefs.current[1] = el)}
          className="absolute top-[150px] left-[20%] md:text-7xl text-3xl font-bold text-[#FFE797]"
        >
          PARTY
        </h2>
        <h2
          ref={(el) => (textRefs.current[2] = el)}
          className="absolute top-[250px] right-[15%] md:text-7xl text-5xl font-bold text-[#541212]"
        >
          FUN
        </h2>
        <h2
          ref={(el) => (textRefs.current[3] = el)}
          className="absolute top-[350px] left-[30%] md:text-6xl text-3xl font-bold text-[#84994F]"
        >
          VIBES
        </h2>
      </div>
    </main>
  );
};

export default ScrollH;
