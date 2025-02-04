import { HTMLAttributes, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {
	BufferGeometry,
	DoubleSide,
	Float32BufferAttribute,
	MeshStandardMaterial,
} from 'three';
import { store } from 'store/store';
import { observer } from 'mobx-react-lite';

const calcVertices = (vertices: number[]) => {
	const geom = new BufferGeometry();
	geom.setAttribute('position', new Float32BufferAttribute(vertices, 3));
	return geom;
};

const Scene = memo(
	observer((props: HTMLAttributes<HTMLDivElement>) => {
		const isDarkTheme = store.getTheme === 'dark';
		const vertices = store.vertices;

		const fillMaterial = new MeshStandardMaterial({
			color: isDarkTheme ? '#88B04B' : '#2E86C1',
			side: DoubleSide,
			flatShading: true,
		});
		const wireframeMaterial = new MeshStandardMaterial({
			color: isDarkTheme ? '#FFF' : '#FF5733',
			wireframe: true,
			wireframeLinewidth: 0.2,
		});

		return (
			<div
				{...props}
				style={{
					background: isDarkTheme ? '#011627' : '#c0c0c0',
					transition: '0.4s',
					...props.style,
				}}
			>
				<Canvas camera={{ position: [3, 3, 3] }}>
					<OrbitControls position={[1, 1, 1]} />
					<group>
						<mesh geometry={calcVertices(vertices)} material={fillMaterial} />
						<mesh
							geometry={calcVertices(vertices)}
							material={wireframeMaterial}
						/>
					</group>

					<ambientLight intensity={0.5} />
					<directionalLight position={[5, 5, 5]} intensity={1} />
				</Canvas>
			</div>
		);
	}),
);
export default Scene;
