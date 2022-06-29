import React from "react"
import { Mesh } from "three";

const Box = () => {
	return (
		<mesh rotation={[90, 0, 20]}>
			<boxBufferGeometry attach="geometry" args={[2, 2, 2, 1, 1, 1]} />
			<meshPhysicalMaterial attach="material" color="#ffffff" />
		</mesh>
	);
}

export default Box;
