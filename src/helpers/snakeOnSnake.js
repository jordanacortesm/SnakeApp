
export const snakeOnSnake = (snake)=>{
    if (snake.next===null) {
        return{
            x:snake.snakeX,
            y:snake.snakeY,
            state:false
        }
        // if ((snake.snakeX===x)&&(snake.snakeY===y)) {
        //     console.log("esta encima");
        //     return true;
        // }else{
        //     return false;
        // }
    }
    // return false
    let {x , y , state} = snakeOnSnake(snake.next)
    if ((snake.snakeX===x)&&(snake.snakeY===y)) {
        return {
            x,
            y,
            state:true
        }
    }
    return {
        x,
        y,
        state
    }
    // return snakeOnApple(snake.next);
}