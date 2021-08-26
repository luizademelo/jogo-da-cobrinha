let canvas = document.getElementById("snake"); 
let context = canvas.getContext("2d");
let box = 32; 
let snake = [];
snake[0] = 
{
    x: 8 * box,
    y: 8 * box
}

let direction = "right"; 
let food = 
{
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function createBG()
{
    context.fillStyle = 'Aqua'; 
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake()
{
    for(i = 0; i < snake.length; i++)
    {
        context.fillStyle = 'green'
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood()
{
    context.fillStyle = "lightgreen";
    context.fillRect(food.x, food.y, box, box); 
}

document.addEventListener('keydown', update)
function update(e)
{
    if(e.keyCode == 37 && direction != "right") direction = "left"; 
    if(e.keyCode == 38 && direction != "down") direction = "up";
    if(e.keyCode == 39 && direction != "left") direction = "right"; 
    if(e.keyCode == 40 && direction != "up") direction = "down";
}


function iniciarJogo()
{
    createBG();
    createSnake();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right")snakeX += box; 
    if(direction == "left")snakeX -= box; 
    if(direction == "up")snakeY -= box; 
    if(direction == "down")snakeY += box; 
    

    let newHead = 
    {
        x: snakeX, 
        y: snakeY
    }
    snake.unshift(newHead); 
    snake.pop();
}

let jogo = setInterval(iniciarJogo, 100); 