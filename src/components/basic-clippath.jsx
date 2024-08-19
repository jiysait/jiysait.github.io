"use client";

import React from "react";
import "../app/custom.css";

export default function BasicClipPath() {
  return (
    <div className={`bg-white`}>
      <clipPath id="myClip">
        <circle cx="40" cy="35" r="35" />
      </clipPath>
      <svg viewBox="0 0 100 100">
        <path
          id="heart"
          d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z"
        />
      </svg>
      <use clip-path="url(#myClip)" href="#heart" fill="red" />
    </div>
  );
}
