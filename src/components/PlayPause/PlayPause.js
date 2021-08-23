import React from 'react';
import './playPause.css';

export const PlayPause = ({setPause, pause, score, setScore}) => {
    // console.log(setPause);
    const handleClick = ()=>{
        if (pause===2) {
            setScore(0);
            setPause(1);
        }else{
            setPause(0);
        }
    }
    const drawContent = ()=>{
        if (pause===2) {
            const highscore = <div className="play">Game Over!<span className="highscore">Highscore: {score}</span></div>;
            return highscore;
        }else{
            return <div className="play">PLAY!</div>;
        }
    }
    return (
        <div className="playPauseContainer"  onClick={handleClick}>
            {
                drawContent()
            }
        </div>
    )
}
