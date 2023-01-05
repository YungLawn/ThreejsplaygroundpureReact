import React, {useRef} from 'react';
import {Canvas, useThree, useFrame} from '@react-three/fiber';
import {OrbitControls, Stats} from '@react-three/drei';
import PeriodicTable from './PeriodicTable';
import Universe from './Universe';
// import Grid from './components/Grid';


function CursorControls(){

    const { viewport } = useThree();

    const cam = useRef();
    useFrame(({mouse}) => {
        const x = (mouse.x * viewport.width) / 2;
        const y = (mouse.y * viewport.height) / 2;
        cam.current.location = [x, y, 0];
    })
    console.log(cam.location);
    return (

        <OrbitControls 
            ref = {cam} 
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 1.2}
            minAzimuthAngle = {0}
            maxAzimuthAngle = {0}
            minDistance = {10}
            maxDistance = {100}
            panSpeed = {0.5}
            rotateSpeed = {1}
            zoomSpeed = {1}
            location = {[0,0,0]}
        >
        </OrbitControls>
    )
}

export default function PeriodicScene() {
    const Table = useRef();

    return(
    <Canvas camera={{fov: 10, position:[0,0,-80] }}>

        <CursorControls/>
    
        <ambientLight intensity={0.25}/>
        <pointLight position={[0, 40, 100]} lookAt={[0,0,0]} intensity={0.75}/>

        <group ref={Table} position={[-14.25, -11, 0]} rotation={[0,0,0]}>
            <PeriodicTable  />
        </group>

        <Universe/>

        <Stats/>
        {/* <Grid size={10} /> */}
    </Canvas>)
}

