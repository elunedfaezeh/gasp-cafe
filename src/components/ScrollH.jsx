import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ScrollH = () => {
  const scrollRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    const circles = gsap.utils.toArray(scrollRef.current.children);

    // حرکت دایره‌ها به صورت آرام و دائمی
    circles.forEach((circle, i) => {
      gsap.fromTo(
        circle,
        { x: -400, opacity: 0 },
        {
          x: 350 * (i + 1),
          opacity: 1,
          rotation: 360,
          scale: 2,
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

    // متن CHEERS فقط یکبار نمایش داده شود و بمونه
    gsap.fromTo(
      textRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        border:1,
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top 30%",
          end: "top 25%",
          toggleActions: "play none none none",
          once: true, // فقط یکبار و بعد بمونه
        },
      }
    );
  }, { scope: scrollRef });

  return (
    <main className="h-[80vh] flex flex-col items-center relative bg-black noisy">
      <div className="mt-20 space-y-10 h-[300vh] relative" ref={scrollRef}>
        <div className="circle w-24 h-24 rounded-lg bg-[#A8D5BA]" />
        <div className="circle w-24 h-24 rounded-lg bg-[#394c1a]" />
        <div className="circle w-24 h-24 rounded-lg bg-[#e1c360]" />
        <div className="circle w-24 h-24 rounded-lg bg-[#e1b460]" />

        <h2
          ref={textRef}
          className="absolute top-[100px] left-1/2 -translate-x-1/2 md:text-6xl text-2xl font-bold p-2"
        >
          CHEERS!
        </h2>
      </div>
    </main>
  );
};

export default ScrollH;
