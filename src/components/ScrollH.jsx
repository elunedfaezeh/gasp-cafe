import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const ScrollH = () => {
  const scrollRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    const circles = gsap.utils.toArray(scrollRef.current.children);

    // حرکت دایره‌ها از سمت چپ
    circles.forEach((circle, i) => {
      gsap.fromTo(
        circle,
        { x: -400, opacity: 0 }, 
        {
          x: 350 * (i + 1),      
          opacity: 1,
          rotation: 360,
          scale: 1.5,
          borderRadius: "40% 60% 70% 30% / 40% 30% 70% 60%", 
          scrollTrigger: {
            trigger: circle,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
          },
          ease: "power1.inOut",
        }
      );
    });

    // متن از سمت چپ وارد بشه
    gsap.fromTo(
      textRef.current,
      { x: -50, opacity: 0 , border: 1,},
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        border: 1,
        padding: 5,
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top 30%",
          end: "top 25%",
          scrub: false,
        },
      }
    );
  }, { scope: scrollRef });

  return (
<main className="h-[80vh] flex flex-col items-center relative bg-black noisy">
<div className="mt-20 space-y-10 h-[300vh] relative" ref={scrollRef}>
<div className="circle w-24 h-24 rounded-lg bg-[#A8D5BA]" />
<div className="circle w-24 h-24 rounded-lg bg-[#556B2F]" />
<div className="circle w-24 h-24 rounded-lg bg-[#FFE797]" />
<div className="circle w-24 h-24 rounded-lg bg-[#D9EAD3]" />

<h2
ref={textRef}
className="absolute top-[100px] left-1/2 -translate-x-1/2 text-6xl font-bold p-2"
>
CHEERS!
</h2>
</div>
</main>
  );
};

export default ScrollH;

