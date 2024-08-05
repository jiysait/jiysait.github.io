"use client";

import { useEffect } from "react";
import anime from "anime";

export default function TestAnime1() {
  useEffect(() => {
    // anime({
    //   targets: ".test-anime",
    //   translateX: 250,
    // });
  }, []);

  return (
    <div className={`wrapper w-screen h-screen bg-white`}>
      <div
        className={`h-32 w-32 border-solid border-2 border-sky-500 test-anime`}
      />
      <div
        className={`h-32 w-32 border-solid border-2 border-sky-500 test-anime`}
      />
    </div>
  );
}
