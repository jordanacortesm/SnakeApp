import React, { useState } from 'react';
import { Apple } from '../Apple/Apple';
import { Snake } from '../Snake/Snake';
import './board.css';

const initialPosition = {
    
    snakeX:4,
    snakeY:14,
    eat:false,
    next:{

        snakeX:5,
        snakeY:14,
        eat:false,
        next:{
        
            snakeX:6,
            snakeY:14,
            eat:false,
            next:null
        }
    }
}
export const Board = () => {
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
            />
            <Apple 
                actualSnakePosition={ actualSnakePosition }
                setApple={ setApple }    
            />
        </div>
    )
}