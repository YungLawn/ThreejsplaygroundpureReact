import React, {Component } from "react";
import { Box} from "@react-three/drei";

const Tile = () => (
    <Box args={[1, 1, 0.2]} position={[0,0,0]}>
    <meshLambertMaterial attach="material" color="green" />
    </Box>
);

const PerTable = () => (
    <Box args={[1, 1, 0.2]} position={[0,0,0]}>
        <meshLambertMaterial attach="material" color="green" />
    </Box>
);

class Table extends Component {
    elements = {  
        Hydrogen: ['H', 'Hydrogen', '1.00794', 1, 1, 1, 10],
        Helium: ['He', 'Helium', '4.002602', 18, 1, 18, 10]
    }
    
    render() { 
        return (<Tile/>);
    }
}

export default Table;