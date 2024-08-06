"use client";

import React, { useEffect, useState } from "react";
import anime from "anime";

export default function TestAnime1() {
  const [animationRef, setAnimationRef] = useState();

  useEffect(() => {
    setAnimationRef(
      anime({
        targets: ".test-anime",
        translateX: 250,
      })
    );
  }, []); // Only run once.

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
