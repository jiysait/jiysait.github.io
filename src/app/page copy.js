"use client";

import React from "react";
import Image from "next/image";
// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { useGLTF } from "@react-three/drei";
// import modelPath from "../../public/chestbox.glb";

// function Model(props) {
//   // const gltf = useLoader(GLTFLoader, "../../public/chestbox.glb");
//   // const gltf = useGLTF(modelPath);
//   const gltf = useGLTF("../../public/chestbox.glb");
//   return <primitive {...props} object={gltf.scene} />;
// }

export default function Home() {
  return (
    <Image
      src="/fox.jpeg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    // <Canvas>
    //   <ambientLight />
    //   <Suspense>
    //     <Model />
    //   </Suspense>
    // </Canvas>
    // <Canvas>
    //   <pointLight position={[10, 10, 10]} />
    //   <mesh>
    //     <sphereGeometry />
    //     <meshStandardMaterial color="hotpink" />
    //   </mesh>
    // </Canvas>
  );
}
