import React, {useState, Component } from 'react';
import { Canvas} from '@react-three/fiber';
import { OrbitControls, Stars} from '@react-three/drei';
import './index.css';

const Box = (props) => {
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    return (
        <mesh
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[5, 5 , 0.001]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

class App extends Component {
    state = {  } 
    render() { 
        return <div>
            <div id = "canvascontainer">
            <Canvas
                camera={{   
                        position: [0, 0, -20], 
                        fov: 25 
                    }
                }
            >
                <OrbitControls 
                    minPolarAngle={Math.PI / 2} 
                    maxPolarAngle={Math.PI / 1.65}
                    minAzimuthAngle = {-Math.PI/12}
                    maxAzimuthAngle = {Math.PI/12}
                />
                <ambientLight intensity={0.5}/>
                <pointLight position={[10, 10, 10]}/>
                <Box position={[0, 0, 0]}/>
                <Stars/>
            </Canvas>
            </div>
        </div>;
    }
}

export default App;