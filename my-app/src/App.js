import React from 'react';
import './Styles/main.css';
import PeriodicScene from './components/PeriodicScene';
import Navbar from './components/Navbar';

const clicked = () =>{
    console.log("Click Me!: Clicked")
}

export default function App(){
    return(
        <React.Fragment>
            <Navbar/>

            <div className='controls'>
                <button onClick={clicked}> Click Me! </button>
            </div>


            <div id='sceneContainer'>
                <PeriodicScene/> 
            </div>

        </React.Fragment>
    )
};