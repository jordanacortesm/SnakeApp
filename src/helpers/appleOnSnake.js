
export const appleOnSnake = (snake,{ x , y })=>{
    if (snake.next===null) {
        if ((snake.snakeX===x)&&(snake.snakeY===y)) {
            // console.log("esta encima");
            return true;
        }else{
            return false;
        }
    }
    // return false
    return appleOnSnake(snake.next, { x, y });
}