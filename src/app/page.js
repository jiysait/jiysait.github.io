"use client";
// import Image from "next/image";
import Anime, { anime } from "react-anime";

let colors = ["blue", "green", "red"];

export default function Home() {
  return (
    <Anime delay={anime.stagger(100)} scale={[0.1, 0.9]}>
      {colors.map((color, i) => (
        <div key={i} className={`{color} h-32 w-32`} />
      ))}
    </Anime>
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
