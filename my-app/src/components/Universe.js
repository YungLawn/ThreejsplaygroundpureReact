import {Stars} from '@react-three/drei';
import React, { Component } from 'react';


class Universe extends Component {
    state = {  } 
    render() { 
        return (
            <group>
                <Stars radius={100} depth={400} count={10000} factor={7} saturation={100} fade speed={1} />
                <Stars radius={100} depth={300} count={10000} factor={7} saturation={100} fade speed={1} />
                <Stars radius={100} depth={200} count={10000} factor={7} saturation={100} fade speed={1} />
                <Stars radius={100} depth={100} count={10000} factor={7} saturation={100} fade speed={1} />
            </group>
            
            
        );
    }
}
 
export default Universe;