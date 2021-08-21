
export const snakeOut = (snake,min,max)=>{
    if (snake.next===null) {
        if ((snake.snakeX>max)||(snake.snakeX<min)||(snake.snakeY>max)||(snake.snakeY<min)) {
            return true;
        }else{
            return false;
        }
    }
    // return false
    return snakeOut(snake.next, min, max);
}