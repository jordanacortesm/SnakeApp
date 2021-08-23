import React, { useState } from 'react';
import { Board } from './components/Board/Board';
import './SnakeApp.css';

const initialLives = 3;
export const SnakeApp = () => {

    const [lives, setLives] = useState(initialLives);

    const [pause, setPause] = useState(1);

    const [score, setScore] = useState(0);

    return (
        <div className="main-container" >
            <div className="content">
                <div className="containerA animate__animated animate__fadeInRight">
                    <div className="titulo">
                    <h1 className=" ">Snake app</h1>
                    </div>
                    <div className="containerATitle">
                        <h2>Controls:</h2>
                    </div>
                    <div style={{marginLeft: 100}}>
                        <h3>Press A to go left</h3> 
                    </div>
                    <div style={{marginLeft: 100}}>
                        <h3>Press D to go right </h3>
                    </div>
                </div>
                <div className="containerB">
                    <Board
                        pause={pause}
                        setPause={setPause}
                        setScore={setScore}
                        setLives={setLives}
                        score={score}
                    />
                    <div className="menu">
                        <div className="vidas">LIVES: {lives}</div>
                        <div className="pausa" onClick={ (e)=>{ setPause(1) } }>
                            <button className="reset-btn">PAUSE</button>
                        </div>
                        <div className="score">SCORE:{score}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
