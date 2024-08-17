"use client";

import React from "react";
import anime from "animejs";

export default function TestLogo() {
  return (
    <div className={`bg-black`}>
      <svg class="logo" viewBox="2 0 800 384">
        <defs>
          <radialGradient
            cx="50%"
            cy="0%"
            fx="50%"
            fy="0%"
            r="50%"
            id="radialGradient-1"
          >
            <stop stop-color="#329FFF" offset="0%"></stop>
            <stop stop-color="#206EFF" offset="100%"></stop>
          </radialGradient>
          <radialGradient
            cx="50%"
            cy="0%"
            fx="50%"
            fy="0%"
            r="50%"
            id="radialGradient-2"
          >
            <stop stop-color="#FF7894" offset="0%"></stop>
            <stop stop-color="#FF324A" offset="100%"></stop>
          </radialGradient>
          <radialGradient
            cx="50%"
            cy="0%"
            fx="50%"
            fy="0%"
            r="100%"
            id="radialGradient-3"
          >
            <stop stop-color="#FF7894" offset="0%"></stop>
            <stop stop-color="#FF324A" offset="100%"></stop>
          </radialGradient>
          <radialGradient
            cx="50%"
            cy="0%"
            fx="50%"
            fy="0%"
            r="100%"
            id="radialGradient-4"
          >
            <stop stop-color="#359FFC" offset="0%"></stop>
            <stop stop-color="#206EFF" offset="100%"></stop>
          </radialGradient>
          <radialGradient
            cx="50%"
            cy="0%"
            fx="50%"
            fy="0%"
            r="50%"
            id="radialGradient-5"
          >
            <stop stop-color="#5FFFD2" offset="0%"></stop>
            <stop stop-color="#31FFA6" offset="100%"></stop>
          </radialGradient>
        </defs>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <rect
            id="dot-js"
            fill="#FFFFFF"
            x="80"
            y="352"
            width="32"
            height="32"
            rx="16"
          ></rect>
          <g id="lines" transform="translate(128.000000, 256.000000)">
            <path
              d="M531.599976,119.042822 C531.872599,121.442657 532.736164,123.612749 534.213875,124.965578 C535.547208,126.186231 537.324986,127 539.587612,127 C542.133067,127 544.032057,126.104854 545.36539,124.680759 C546.739127,123.175287 547.506804,120.978112 547.506804,118.374052 L547.506804,97"
              id="line-s"
              stroke="#FDFDFD"
              stroke-linecap="square"
            ></path>
            <path
              d="M576.512399,105.204082 C576.353483,103.122449 575.558903,101.612245 574.367034,100.183673 C572.777876,98.2653061 569.758474,97 566.739073,97 C564.116961,97 561.534578,97.8979592 559.786504,99.5306122 C558.356261,100.877551 557.323308,102.591837 557.323308,105 C557.323308,108.410588 560.43582,110.318694 563,110.738061 C566,111.228706 568.5,111.228706 572,112.209996 C574.445972,112.89577 577.108333,115.626631 577.108333,118.632653 C577.108333,121.163265 576.194567,122.836735 574.883511,124.183673 C572.976521,126.102041 570.155764,127 566.897989,127 C563.679942,127 560.898915,125.938776 559.031653,123.897959 C557.641139,122.387755 556.687644,120.346939 556.488999,118.142857"
              id="line-j"
              stroke="#FDFDFD"
            ></path>
            <path
              d="M48,112 C21.490332,112 0,90.509668 0,64 C0,37.490332 21.490332,16 48,16 C74.509668,16 96,37.490332 96,64 L96,128"
              id="line-a"
              stroke="#206EFF"
              stroke-width="32"
            ></path>
            <path
              d="M96,0 L96,128 L96,64 C96,37.490332 117.490332,16 144,16 C170.509668,16 192,37.490332 192,64 L192,128"
              id="line-n-1"
              stroke="#FF324A"
              stroke-width="32"
            ></path>
            <path
              d="M224,0 L224,128 L224,64 C224,37.490332 245.490332,16 272,16 C298.509668,16 320,37.490332 320,64 L320,128"
              id="line-m-1"
              stroke="#206EFF"
              stroke-width="32"
            ></path>
            <path
              d="M320,128 L320,64 C320,37.490332 341.490332,16 368,16 C394.509668,16 416,37.490332 416,64 L416,128"
              id="line-m-2"
              stroke="#FF324A"
              stroke-width="32"
            ></path>
            <path
              d="M192,48 L192,64 C192,90.509668 213.490332,112 240,112"
              id="line-i-1"
              stroke="#31FFA6"
              stroke-width="32"
            ></path>
            <path
              d="M464,80 L512,80 L512,64 C512,37.490332 490.509668,16 464,16 C437.490332,16 416,37.490332 416,64 C416,90.509668 437.490332,112 464,112"
              id="line-e"
              stroke="#31FFA6"
              stroke-width="32"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
}
