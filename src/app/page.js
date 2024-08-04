"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
// import Anime from "react-anime";
import anime from "animejs";

export default function Home() {
  const [animationRef, setAnimationRef] = useState();

  useEffect(() => {
    setAnimationRef(
      anime({
        targets: ["path"],
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: function (el, i) {
          return i * 250;
        },
        direction: "alternate",
      })
    );
  }, []);

  return (
    <div className="w-screen h-screen bg-white">
      <Image src="/curve.svg" alt="curve" width={200} height={200} priority />
      {/* <Image
        src="/background_with_tulip.png"
        width={500}
        height={500}
        alt="Jongil Yoon"
      /> */}
      {/* <SvgComponent width={180} height={370} /> */}
    </div>
  );
}
