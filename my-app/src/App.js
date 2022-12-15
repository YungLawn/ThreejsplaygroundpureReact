import React, { useRef, useState, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';
import './index.css';

const Box = (props) => {
const mesh = useRef(null)
const [hovered, setHover] = useState(false)
const [active, setActive] = useState(false)
// useFrame((state, delta) => (mesh.current.rotation.x += delta * 1))
    return (
        <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 1 , 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

class App extends Component {
    state = {  } 
    render() { 
        return <div>
            <h1>NavBar</h1>
            <div id = "canvascontainer">
            <Canvas>
                <OrbitControls/>
                <ambientLight intensity={0.5}/>
                <pointLight position={[10, 10, 10]} />
                <Box position={[0, 0, 0]} />
            </Canvas>
            </div>
        </div>;
    }
}

export default App;