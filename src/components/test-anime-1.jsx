"use client";

import Anime, { anime } from "react-anime";

export default function TestAnime1() {
  return (
    <div className={`wrapper w-screen h-screen bg-white`}>
      <Anime translateX="250">
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
