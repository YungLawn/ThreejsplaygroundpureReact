import React from 'react';
import './Styles/main.css'
import PeriodicScene from './components/PeriodicScene';
import Navbar from './components/Navbar';

export default function App(){
    return(
        <React.Fragment>
            <Navbar/>

            <div id='sceneContainer'>
                <PeriodicScene/>
            </div>
        </React.Fragment>
    )
};