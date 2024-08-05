import Image from "next/image";

export default function TestImage() {
  return (
    <div>
      <Image src="/test.jpg" width={500} height={500} alt="test" />
      <p>퍼블릭 경로에 있는 에셋에 접근하는 방법</p>
    </div>
  );
}
