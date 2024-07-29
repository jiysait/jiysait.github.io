import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import modelPath from "/chestbox.glb";

function Model(props) {
  const gltf = useGLTF(modelPath);
  return <primitive {...props} object={gltf.scene} />;
}

export default function Home() {
  return (
    <Canvas>
      <ambientLight />
      <Suspense>
        <Model />
      </Suspense>
    </Canvas>
  );
}
