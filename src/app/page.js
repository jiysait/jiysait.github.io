import Image from "next/image";
import Anime from "react-anime";
import * as React from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width="210mm"
    // height="297mm"
    viewBox="0 0 210 297"
    {...props}
  >
    <path
      d="M117.48 112.715 85.51 95.697l-32.144 16.688L59.67 76.72 33.867 51.308l35.867-5.024L85.93 13.889l15.861 32.56 35.814 5.392-26.065 25.146z"
      style={{
        fill: "#000",
        strokeWidth: 0.264999,
      }}
    />
    <path
      d="M82.485 98.256h5.082v109.297h-5.082z"
      style={{
        fill: "#000",
        strokeWidth: 0.264999,
      }}
    />
    <ellipse
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

const MyAnime = (props) => (
  <Anime
    easing="easeOutQuad"
    duration={1500}
    loop={true}
    svg
    component="g"
    delay={(el, index) => index * 200}
    direction="alternate"
    strokeDashoffset={(el) => {
      var pathLength = "0";
      for (var key in el.children) {
        // let child: SVGPathElement = el.children[key] as SVGPathElement;
        let child = el.children[key];
        if (child.getTotalLength) {
          pathLength = child.getTotalLength().toString();
          el.setAttribute("stroke-dasharray", pathLength);
        }
      }
      return [pathLength, 0];
    }}
    {...props}
  />
);

export default function Home() {
  return (
    <div class="w-screen h-screen bg-white">
      {/* <Image
        src="/happyness.svg"
        alt="happyness"
        width={180}
        height={37}
        priority
      /> */}
      <Image
        src="/background_with_tulip.png"
        width={500}
        height={500}
        alt="Jongil Yoon"
      />
      <SvgComponent width={180} height={37} />
    </div>
  );
}
