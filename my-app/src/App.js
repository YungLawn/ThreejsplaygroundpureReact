import React from 'react';
import './index.css';
import PeriodicScene from './components/PeriodicScene';

export default function App(){
    return(
        <>
            <div className='controls'> 
                <button>Controls</button>
            </div>

            <div id='sceneContainer'>
                <PeriodicScene/>
            </div>
        </>
    )
};