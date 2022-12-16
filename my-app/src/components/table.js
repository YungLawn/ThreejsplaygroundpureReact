import React, {Component } from "react";
import { Box} from "@react-three/drei";

const PeridoicTable = () => (
    <Box args={[1, 1, 0.2]} position={[0,0,0]}>
    <meshStandardMaterial attach="material" color="hotpink" />
    </Box>
);

class Table extends Component {
    elements = {  
        Hydrogen: ['H', 'Hydrogen', '1.00794', 1, 1, 1, 10],
        Helium: ['He', 'Helium', '4.002602', 18, 1, 18, 10]
    } 

    PeridoicTable = () => (
        <Box args={[1, 1, 0.2]} position={[0,0,0]}>
        <meshStandardMaterial attach="material" color="beige" />
        </Box>
    );

    render() { 
        return (<PeridoicTable/>);
    }
}

export default Table;