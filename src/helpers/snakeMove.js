
export const snakeMove = (snake, direction)=>{
    switch (direction) {
        case 0:
            const snakeLeft = (snake)=>{
                // console.log(snake);
                if (snake.next===null) {
                    // console.log("snake: "+JSON.stringify(snake,null, 2));
                    return {
                        snakeX:snake.snakeX-1,
                        snakeY:snake.snakeY,
                        eat:false,
                        next:null
                    };
                }
                return {
                    snakeX:snake.next.snakeX,
                    snakeY:snake.next.snakeY,
                    eat:false,
                    next:snakeLeft(snake.next)};
            }
            return snakeLeft(snake);
        case 2:
            const snakeRight = (snake)=>{
                // console.log(snake);
                if (snake.next===null) {
                    // console.log("snake: "+JSON.stringify(snake,null, 2));
                    return {
                        snakeX:snake.snakeX+1,
                        snakeY:snake.snakeY,
                        eat:false,
                        next:null
                    };
                }
                return {
                    snakeX:snake.next.snakeX,
                    snakeY:snake.next.snakeY,
                    eat:false,
                    next:snakeRight(snake.next)};
            }
            return snakeRight(snake);
        case 1:
            const snakeUp = (snake)=>{
                // console.log(snake);
                if (snake.next===null) {
                    // console.log("snake: "+JSON.stringify(snake,null, 2));
                    return {
                        snakeX:snake.snakeX,
                        snakeY:snake.snakeY-1,
                        eat:false,
                        next:null
                    };
                }
                return {
                    snakeX:snake.next.snakeX,
                    snakeY:snake.next.snakeY,
                    eat:false,
                    next:snakeUp(snake.next)};
            }
            return snakeUp(snake);
        case 3:
            const snakeDown = (snake)=>{
                // console.log(snake);
                if (snake.next===null) {
                    // console.log("snake: "+JSON.stringify(snake,null, 2));
                    return {
                        snakeX:snake.snakeX,
                        snakeY:snake.snakeY+1,
                        eat:false,
                        next:null
                    };
                }
                return {
                    snakeX:snake.next.snakeX,
                    snakeY:snake.next.snakeY,
                    eat:false,
                    next:snakeDown(snake.next)};
            }
            return snakeDown(snake);
            

        default:
            return {
    
                snakeX:4,
                snakeY:14,
                next:{
            
                    snakeX:5,
                    snakeY:14,
                    next:{
                    
                        snakeX:6,
                        snakeY:14,
                        next:null
                    }
                }
            };
    }
};