import React, { useState, useEffect, useMemo, useRef } from 'react';
import { snakeMove } from '../../helpers/snakeMove';
import { snakeOnApple } from '../../helpers/snakeOnApple';
import { snakeOnSnake } from '../../helpers/snakeOnSnake';
import { snakeOut } from '../../helpers/snakeOut';

import './snake.css';

//const initialPosition = [ [4,5,6] , [14,14,14] ];

const initialPosition = {
    
    snakeX:4,
    snakeY:14,
    eat:false,
    score:false,
    next:{

        snakeX:5,
        snakeY:14,
        eat:false,
        score:false,
        next:{
        
            snakeX:6,
            snakeY:14,
            eat:false,
            score:false,
            next:null
        }
    }
}
const initialDirection = 2;
const boardMax=30;
export const Snake = React.memo(({ setActualSnakePosition, apple, pause, setLives, setPause}) => {

    const tablero = useMemo(() => [ new Array(boardMax).fill(0) , new Array(boardMax).fill(0) ],[]);
    const [snake, setSnake]= useState( initialPosition );
    const [direction, setDirection] = useState(initialDirection);

    const touchDiv = useRef(null);
    
    useEffect(() => {
        setActualSnakePosition(snake);
    }, [setActualSnakePosition])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const appleEaten = ()=>{
            setActualSnakePosition(snake)
            if(!snake.eat){
                setSnake((anterior)=>{
                    return {
                        snakeX:anterior.snakeX,
                        snakeY:anterior.snakeY,
                        eat:true,
                        next:anterior
                    }
                })
            }
        }

        const { state } = snakeOnSnake(snake);

        if((snakeOut(snake,0,boardMax))||(state)){
            setSnake(initialPosition);
            setDirection(initialDirection);
            setLives(e=>{
                if (e-1===-1) {
                    setPause(2);
                    return 3;
                }else{
                    return e-1;
                }
            });
        }
        snakeOnApple(snake, apple)&&appleEaten();
    }, [snake, apple, tablero, setActualSnakePosition, setSnake, setLives, setPause])

    useEffect(() => {
        const interval = setInterval(() => {
            if (!pause) {
                touchDiv?.current&&touchDiv.current.focus();
                setSnake((e)=>{
                    return snakeMove(e, direction);
                })
            }
          }, 100)
        
          return () => clearInterval(interval);
    }, [setSnake, direction, pause])

    let fired=false;
    const handleKeyDown=({keyCode}) =>{
        if (fired) {
            return;
        }
        fired=true;
        // console.log(keyCode);
        if (keyCode===65) {
            direction===0?setDirection(3):setDirection((e)=>e-1);
        }
        if (keyCode===68) {
            direction===3?setDirection(0):setDirection((e)=>e+1);
        }
        // console.log(direction);
    }
    const drawSnake = ()=>{
        let mapa=[];
        for (let y = 0; y < tablero[0].length; y++) {
            for (let x = 0; x < tablero[1].length; x++){

                let empty=true;
                let aux = snake;

                do {
                    let {snakeX, snakeY} = aux;
                    if((snakeX===x)&&(snakeY===y)){
                        mapa=[...mapa,<div key={`X${x}_Y${y}`} className="snake-cell" />];
                        empty=false;
                        break;
                    }
                    aux=aux.next; 
                } while (aux!==null);

                if (empty) {
                    mapa=[...mapa,<div key={`X${x}_Y${y}`} className="empty-cell" />];
                }

            }
        }
        
        return mapa;
    }
    return (
        <div ref={touchDiv} className="touch" tabIndex={-1} onKeyDown={(e) => handleKeyDown(e)}>
            {
                drawSnake()
            }
        </div>
    )
});