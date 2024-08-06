"use client";

import Anime, { anime } from "react-anime";

export default function TestReactAnime() {
  return (
    <div className={`wrapper w-screen h-screen bg-white`}>
      <Anime
        duration={1000}
        direction="alternate"
        loop={true}
        delay={(el, index) => index * 240}
        translateX="13rem"
      >
        <div
          className={`h-32 w-32 border-solid border-2 border-sky-500 test-anime`}
        />
        <div
          className={`h-32 w-32 border-solid border-2 border-sky-500 test-anime`}
        />
      </Anime>
    </div>
  );
}
