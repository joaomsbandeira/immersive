import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { useEnvironment } from "spacesvr";
import * as THREE from "three";
import { useSpring, config } from "react-spring";

const GroovyLight = () => {
  const spotLight = useRef(new THREE.SpotLight());
  const col = useRef(new THREE.Color());
  const { player } = useEnvironment();

  const [spring, setSpring] = useSpring(() => ({
    v: [0],
    config: config.slow,
  }));

  return (
    <group position-y={10}>
      <primitive
        object={spotLight.current}
        intensity={1.5}
        angle={0.4}
        penumbra={0.6}
        color="white"
      />
      <primitive object={spotLight.current.target} position={[0, -1, 0]} />
    </group>
  );
};

export default GroovyLight;
