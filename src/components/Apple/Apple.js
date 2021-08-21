import React,{ useEffect, useMemo } from 'react';
import { appleOnSnake } from '../../helpers/appleOnSnake';
import './apple.css'

let applePos = {
}
const boardMax=30;
export const Apple = ({ actualSnakePosition, setApple }) => {
    const tablero = useMemo(() => [ new Array(boardMax).fill(0) , new Array(boardMax).fill(0) ],[]);

    useEffect(() => {

        const newApplePos = (actualSnakePosition,min,max)=>{
            console.log(actualSnakePosition);
            let x=Math.floor(Math.random() * (max - min + 1)) + min;
            let y=Math.floor(Math.random() * (max - min + 1)) + min;
            
            while (appleOnSnake(actualSnakePosition,{x,y})) {
                x=Math.floor(Math.random() * (max - min + 1)) + min;
                y=Math.floor(Math.random() * (max - min + 1)) + min;
            }
            return {
                x,
                y
            }
        }

        if (!actualSnakePosition.eat) {
            applePos=newApplePos(actualSnakePosition,0,29);
            setApple(applePos);
            
        }
    }, [actualSnakePosition,setApple])

    const drawApple = ()=>{
        let mapa=[];
        for (let y = 0; y < tablero[0].length; y++) {
            for (let x = 0; x < tablero[1].length; x++){

                // let empty=true;
                // let aux = snake;

                if ((applePos.x===x)&&(applePos.y===y)) {
                    mapa=[...mapa,<div key={`XA${x}_YA${y}`} className="apple-cell" />];
                }else{
                    mapa=[...mapa,<div key={`XA${x}_YA${y}`} className="empty-cell" />];
                }
            }
        }
        
        return mapa;
    }
    return (
        <div className="board-wrap">
            { drawApple() }
        </div>
    )
}
