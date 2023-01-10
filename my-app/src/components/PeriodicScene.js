import React, {useRef} from 'react';
import {Canvas} from '@react-three/fiber';
import {Stats} from '@react-three/drei';
import PeriodicTable from './PeriodicTable';
import Universe from './Universe';
// import Grid from './components/Grid';
import SpecialControls from './SpecialControls';



export default function PeriodicScene() {
    const Table = useRef();

    return(
    <Canvas camera={{fov: 10, position:[0,0,-80] }}>

        <React.Suspense fallback={<></>}>
            <SpecialControls/>
    
            <ambientLight intensity={0.25}/>
            <pointLight position={[0, -20, 100]} lookAt={[0,0,0]} intensity={0.75}/>

            <group ref={Table} position={[-14.25, -10, 0]} rotation={[0,0,0]}>
                <PeriodicTable  />
            </group>

            <Universe/>

            <Stats/>
            {/* <Grid size={10} /> */}
        </React.Suspense>

        
    </Canvas>)
}

