import Anime from "react-anime";

export default function TestAnimeSVG() {
  return (
    <div className={`wrapper w-screen h-screen bg-white`}>
      <Anime>
        <svg
          className="test-anime-svg"
          width="500"
          height="500"
          viewBox="0 0 1122.5197 793.70081"
          // preserveAspectRatio="xMidYMax meet"
        >
          <path
            style={{
              fill: "none",
              strokeWidth: 2.89134169,
              strokeDasharray: "none",
              stroke: "#000000",
              strokeOpacity: 1,
              strokeLinejoin: "miter",
              strokeLinecap: "round",
            }}
            d="m 206.06972,284.50917 c 212.71714,-18.61275 434.74065,124.97131 434.74065,124.97131 0,0 136.93665,115.66494 -111.6765,160.86733 -248.61315,45.20239 -247.28366,-90.40478 -247.28366,-90.40478 0,0 -313.75778,-87.74581 53.17928,-118.3239 366.93706,-30.57809 132.9482,127.63028 132.9482,127.63028"
            id="path1"
          />
        </svg>
      </Anime>
    </div>
  );
}
