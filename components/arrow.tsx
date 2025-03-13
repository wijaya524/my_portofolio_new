import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function ScrollButton() {
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.to(buttonRef.current, {
      y: 10,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  text-white relative ">
      <button
        ref={buttonRef}
        className="px-6 py-3 text-lg font-bold uppercase tracking-wider text-cyan-400 border-2 border-cyan-400 rounded-full  transition-all duration-300 shadow-lg flex items-center gap-2"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        Next
        <Image  src="/icons/arrow.svg" alt="Arrow Down" width={24} height={24} />
      </button>
    </div>
  );
}
