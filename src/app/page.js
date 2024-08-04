"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
// import Anime from "react-anime";
import anime from "animejs";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width="210mm"
    // height="297mm"
    viewBox="0 0 210 297"
    {...props}
  >
    <path
      class="st0"
      d="M117.48 112.715 85.51 95.697l-32.144 16.688L59.67 76.72 33.867 51.308l35.867-5.024L85.93 13.889l15.861 32.56 35.814 5.392-26.065 25.146z"
      style={{
        fill: "#000",
        strokeWidth: 0.264999,
      }}
    />
    <path
      class="st0"
      d="M82.485 98.256h5.082v109.297h-5.082z"
      style={{
        fill: "#000",
        strokeWidth: 0.264999,
      }}
    />
    <ellipse
      class="st0"
      cx={-15.927}
      cy={220.237}
      rx={30.917}
      ry={12.946}
      style={{
        fill: "#000",
        strokeWidth: 0.264999,
      }}
      transform="rotate(-35.907)"
    />
    <ellipse
      class="st0"
      cx={-153.003}
      cy={121.62}
      rx={30.917}
      ry={12.946}
      style={{
        fill: "#000",
        strokeWidth: 0.264999,
      }}
      transform="scale(-1 1) rotate(-35.907)"
    />
  </svg>
);

export default function Home() {
  const [animationRef, setAnimationRef] = useState();

  useEffect(() => {
    setAnimationRef(
      anime({
        targets: ".st0, .st1",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "cubicBezier(.5, .05, .1, .3)",
        duration: 1000,
        delay: function (el, i) {
          return i * 250;
        },
      })
    );
  }, []);

  return (
    <div className="w-screen h-screen bg-white">
      {/* <Image
        src="/happyness.svg"
        alt="happyness"
        width={180}
        height={37}
        priority
      /> */}
      {/* <Image
        src="/background_with_tulip.png"
        width={500}
        height={500}
        alt="Jongil Yoon"
      /> */}
      <SvgComponent width={180} height={370} />
    </div>
  );
}
