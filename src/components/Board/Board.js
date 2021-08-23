import React, { useState } from 'react';
import { Apple } from '../Apple/Apple';
import { PlayPause } from '../PlayPause/PlayPause';
import { Snake } from '../Snake/Snake';
import './board.css';

const initialPosition = {
    
    snakeX:4,
    snakeY:14,
    eat:true,
    score:false,
    next:{

        snakeX:5,
        snakeY:14,
        eat:true,
        score:false,
        next:{
        
            snakeX:6,
            snakeY:14,
            eat:true,
            score:false,
            next:null
        }
    }
}
export const Board = ({pause, setPause, setScore, setLives, score}) => {
    const initialApple = {
        x:10,
        y:20
    }
    const [apple, setApple] = useState(initialApple);

    const [actualSnakePosition, setActualSnakePosition] = useState(initialPosition);

    return (
        <div className="board-container" >
            
            <Snake 
                setActualSnakePosition={ setActualSnakePosition } 
                apple={ apple }
                pause={ pause }
                setLives={ setLives }
                setPause={ setPause }
            />
            <Apple 
                actualSnakePosition={ actualSnakePosition }
                setApple={ setApple }    
                setScore={ setScore }
            />
            {
            pause&&
            <PlayPause
                setPause={setPause}
                pause={pause}
                score={score}
                setScore={setScore}
            />
            }
        </div>
    )
}