import React, {Component } from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Stars, Stats} from '@react-three/drei';
import './index.css';
import Table from './components/table';
// import { Group } from 'three';
// import Grid from './components/Grid';

class App extends Component {
    state = {  } 
    render() { 
        return <div id='appContainer'>
            <Canvas id='canvas' camera={{ position: [0, 0, -20], fov: 45 }}>
                <OrbitControls 
                    minPolarAngle={Math.PI / 2} 
                    maxPolarAngle={Math.PI / 1.65}
                    minAzimuthAngle = {-Math.PI/12}
                    maxAzimuthAngle = {Math.PI/12}
                    minDistance = {5}
                    maxDistance = {60}
                    panSpeed = {0.1}
                    rotateSpeed = {0.25}
                    zoomSpeed = {0.5}
                />
                <ambientLight intensity={0.5}/>
                <pointLight position={[10, 10, 10]}/>
                <group position={[-10,-5,0]}>
                    <Table/>
                </group>
                
                <Stars/>
                <Stats/>
                {/* <Grid size={10} /> */}
            </Canvas>
        </div>;
    }
}

export default App;