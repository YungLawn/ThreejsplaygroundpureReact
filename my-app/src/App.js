import React, {Component } from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Stats} from '@react-three/drei';
import './index.css';
import Table from './components/table';
import Universe from './components/Universe';
// import Grid from './components/Grid';


class App extends Component {
    state = {  } 
    render() { 
        return <div id='appContainer'>
            <Canvas id='canvas' camera={{fov: 10, position:[0,0,-80] }}>
                <OrbitControls 
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 1.2}
                    minAzimuthAngle = {0}
                    maxAzimuthAngle = {0}
                    minDistance = {10}
                    maxDistance = {100}
                    panSpeed = {0.5}
                    rotateSpeed = {0.5}
                    zoomSpeed = {1}
                />
                <ambientLight intensity={0.1}/>
                <pointLight position={[0, 0, 1000]} lookAt={[0,0,0]}/>

                <group position={[-14.25, -11, 0]}>
                    <Table/>
                </group>

                <Universe/>

                <Stats/>
                {/* <Grid size={10} /> */}
            </Canvas>
        </div>;
    }
}

export default App;