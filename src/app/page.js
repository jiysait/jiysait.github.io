import Image from "next/image";

export default function Home() {
  return (
    <div class="w-screen h-screen bg-white">
      <Image
        src="/happyness.svg"
        alt="happyness"
        width={180}
        height={37}
        priority
      />
      <Image
        src="/background_with_tulip.png"
        width={500}
        height={500}
        alt="Jongil Yoon"
      />
    </div>
  );
}
