export const randomInteger = (min, max, snake)=>{

    let apple=Math.floor(Math.random() * (max - min + 1)) + min;

    const recursiveApple= (snake, apple)=>{
        if(!snake.includes(apple)){
            return apple;
        }
        apple = Math.floor(Math.random() * (max - min + 1)) + min;
        return recursiveApple(snake, apple);
    }

    apple = recursiveApple(snake, apple);
    return apple;
}
