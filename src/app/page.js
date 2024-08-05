"use client";
// import Image from "next/image";
import Anime, { anime } from "react-anime";

export default function Home() {
  return (
    <div className={`wrapper w-screen h-screen bg-white`}>
      <Anime
        easing="easeOutElastic"
        duration={1000}
        direction="alternate"
        loop={true}
        delay={(el, index) => index * 240}
        translateX="13rem"
        scale={[0.75, 0.9]}
      >
        <div
          className={`h-32 w-32 border-solid border-2 border-sky-500 anime-test`}
        />
        <div
          className={`h-32 w-32 border-solid border-2 border-sky-500 anime-test`}
        />
      </Anime>
    </div>
  );
  // return (
  //   <div className="w-screen h-screen bg-white">
  //     <Anime delay={anime.stagger(100)} scale={[0.1, 0.9]}>
  //       {colors.map((color, i) => (
  //         <div key={i} className={color} />
  //       ))}
  //     </Anime>
  //     {/* <Image src="/curve.svg" alt="curve" width={200} height={200} priority /> */}
  //     {/* <Image
  //       src="/background_with_tulip.png"
  //       width={500}
  //       height={500}
  //       alt="Jongil Yoon"
  //     /> */}
  //   </div>
  // );
}
