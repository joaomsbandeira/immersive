import { Background, Fog, StandardEnvironment, Image } from "spacesvr";
import * as THREE from "three";
import Cubes from "./Cubes";
import FollowPlayer from "./FollowPlayer";
import GroovyLight from "./GroovyLight";

export default function Starter() {
  return (
    <StandardEnvironment>
      <Background color="white" />

      <Fog color={new THREE.Color("white")} near={0} far={20} />
      <Cubes />
      <ambientLight />
      <FollowPlayer>
        <GroovyLight />
      </FollowPlayer>

      <mesh rotation-x={-Math.PI / 2}>
        <planeBufferGeometry args={[200, 200]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </StandardEnvironment>
  );
}
