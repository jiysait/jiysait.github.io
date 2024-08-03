import Image from "next/image";

export default function Home() {
  return (
    <div class="w-screen h-screen">
      <Image
        src="/background_with_tulip.png"
        width={500}
        height={500}
        alt="Jongil Yoon"
      />
    </div>
  );
}
