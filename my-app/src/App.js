import React, {Component } from 'react';
import { Canvas} from '@react-three/fiber';
import {OrbitControls, Stars} from '@react-three/drei';
import './index.css';
import Table from './components/table';
// import Grid from './components/Grid';

class App extends Component {
    state = {  } 
    render() { 
        return <div id = "canvascontainer">
            <Canvas camera={{ position: [0, 0, -10], fov: 45 }}>
            {/* <Grid size={10} /> */}
                <OrbitControls 
                    minPolarAngle={Math.PI / 2} 
                    maxPolarAngle={Math.PI / 1.65}
                    minAzimuthAngle = {-Math.PI/12}
                    maxAzimuthAngle = {Math.PI/12}
                />
                <ambientLight intensity={0.5}/>
                <pointLight position={[10, 10, 10]}/>
                <Table/>
                <Stars/>
            </Canvas>
        </div>;
    }
}

export default App;