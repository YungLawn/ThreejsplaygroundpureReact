import React from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Stats} from '@react-three/drei';
import PeriodicTable from './PeriodicTable';
import Universe from './Universe';
// import Grid from './components/Grid';

export default function PeriodicScene() {
    return(
    <Canvas camera={{fov: 10, position:[0,0,-80] }}>
        <OrbitControls 
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 1.2}
            minAzimuthAngle = {0}
            maxAzimuthAngle = {0}
            minDistance = {10}
            maxDistance = {100}
            panSpeed = {0.5}
            rotateSpeed = {1}
            zoomSpeed = {1}
        />
        <ambientLight intensity={0.25}/>
        <pointLight position={[0, 40, 100]} lookAt={[0,0,0]} intensity={0.75}/>

        <group position={[-14.25, -11, 0]} rotation={[0,0,0]}>
            <PeriodicTable  />
        </group>

        <Universe/>

        {/* <Stats/> */}
        {/* <Grid size={10} /> */}
    </Canvas>)
}

