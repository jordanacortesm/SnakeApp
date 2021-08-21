import React from 'react';
import { Board } from './components/Board/Board';

export const SnakeApp = () => {

    return (
        <div className="main-container" >
            <h1 className="animate__animated animate__fadeInRightBig">Snake app</h1>
            <Board />
        </div>
    )
}
