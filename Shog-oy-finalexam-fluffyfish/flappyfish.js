//board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//bird
let birdWidth = 34; 
let birdHeight = 30;
let birdX = boardWidth/8;
let birdY = boardHeight/2;
let birdImg;

let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight
}

//pipes
let pipeArray = [];
let pipeWidth = 64; 
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//physics
let velocityX = -2; 
let velocityY = 0; 
let gravity = 0.4;

let gameOver = false;
let score = 0;

//game state
let gameState = "start"; 
let startButton = { x: boardWidth/2 - 60, y: boardHeight/2, width: 120, height: 50 };
let restartButton = { x: boardWidth/2 - 60, y: boardHeight/2 + 60, width: 120, height: 50 };

// Sounds
let bgMusic = new Audio("./music.mp3"); 
let jumpSound = new Audio("./pop.mp3");  
let loseSound = new Audio("./lose.mp3"); 

// Online-only flag
let isOffline = false;

window.onload = function() {
    if (!navigator.onLine) {
        showOfflineScreen();
        window.addEventListener("online", () => location.reload());
        return;
    }

    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); 

    //load images
    birdImg = new Image();
    birdImg.src = "./flappybird.png";
    birdImg.onload = function() {
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }

    topPipeImg = new Image();
    topPipeImg.src = "./toppipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "./bottompipe.png";

    // Play background music in a loop
    bgMusic.loop = true;
    bgMusic.volume = 0.5;
    bgMusic.play().catch(() => {
        
    });

    requestAnimationFrame(update);
    setInterval(placePipes, 1500); 
    document.addEventListener("keydown", moveBird);
    board.addEventListener("click", handleMouseClick);

    // Listen for offline event during gameplay
    window.addEventListener("offline", () => {
        isOffline = true;
        showOfflineScreen();
    });
}

function update() {
    if (isOffline) {
        showOfflineScreen();
        return;
    }

    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    if (gameState === "start") {
        drawStartScreen();
        return;
    }

    if (gameState === "gameover") {
        drawGameOverScreen();
        return;
    }

    if (gameOver) {
        gameState = "gameover";
        bgMusic.pause(); 
        loseSound.currentTime = 0; 
        loseSound.play(); 
        return;
    }

    //bird
    velocityY += gravity;
    bird.y = Math.max(bird.y + velocityY, 0);
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    if (bird.y > board.height) {
        gameOver = true;
    }

    //pipes
    for (let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if (!pipe.passed && bird.x > pipe.x + pipe.width) {
            score += 0.5; 
            pipe.passed = true;
        }

        if (detectCollision(bird, pipe)) {
            gameOver = true;
        }
    }

    //clear pipes
    while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
        pipeArray.shift(); 
    }

    //score
    context.fillStyle = "white";
    context.font="45px sans-serif";
    context.fillText(score, 5, 45);
}

function placePipes() {
    if (gameOver || isOffline) {
        return;
    }

    let randomPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);
    let openingSpace = board.height/4;

    let topPipe = {
        img : topPipeImg,
        x : pipeX,
        y : randomPipeY,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    pipeArray.push(topPipe);

    let bottomPipe = {
        img : bottomPipeImg,
        x : pipeX,
        y : randomPipeY + pipeHeight + openingSpace,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    pipeArray.push(bottomPipe);
}

function moveBird(e) {
    if (isOffline) return;
    if (gameState === "start") return;
    if (e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX") {
        //jump
        velocityY = -6;

        // Play jump sound
        jumpSound.currentTime = 0;
        jumpSound.play();

        //reset game
        if (gameOver) {
            resetGame();
        }
    }
}

function handleMouseClick(e) {
    if (isOffline) return;
    let rect = board.getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;

    // Play jump sound if in playing state (mouse click to jump)
    if (gameState === "playing") {
        velocityY = -6;
        jumpSound.currentTime = 0;
        jumpSound.play();
        return;
    }

    if (gameState === "start") {
        if (isInside(mouseX, mouseY, startButton)) {
            gameState = "playing";
            gameOver = false;
            score = 0;
            pipeArray = [];
            bird.y = birdY;
            velocityY = 0;
            bgMusic.currentTime = 0; 
            bgMusic.play();
        }
    } else if (gameState === "gameover") {
        if (isInside(mouseX, mouseY, restartButton)) {
            resetGame();
            gameState = "playing";
            bgMusic.currentTime = 0; 
            bgMusic.play();
        }
    }
}

function isInside(x, y, btn) {
    return x >= btn.x && x <= btn.x + btn.width && y >= btn.y && y <= btn.y + btn.height;
}

let bgImg = new Image();
bgImg.src = "./flappybirdbg.jpg";

function drawStartScreen() {
    context.drawImage(bgImg, 0, 0, boardWidth, boardHeight);

    // Draw semi-transparent blue container with white border
    const containerWidth = 320;
    const containerHeight = 300;
    const containerX = (boardWidth - containerWidth) / 2;
    const containerY = boardHeight / 2 - 140;

    context.globalAlpha = 0.7;
    context.fillStyle = "rgba(0,0,0,0.7)";;
    context.fillRect(containerX, containerY, containerWidth, containerHeight);
    context.globalAlpha = 1.0;
    context.strokeStyle = "white";

    // Draw texts
    context.fillStyle = "white";
    context.textAlign = "center";
    context.font = "40px sans-serif";
    context.fillText("FLAPPY", boardWidth / 2, boardHeight / 2 - 80);
    context.fillText("PISHHSHH", boardWidth / 2, boardHeight / 2 - 35);
    context.font = "16px sans-serif";
    context.fillText("Help the fish swim through the pipes!", boardWidth / 2, boardHeight / 2 - -80);
    context.fillText("Avoid hitting them or you'll lose!", boardWidth / 2, boardHeight / 2 - -100);
    context.fillText("Tap or press space to swim!", boardWidth / 2, boardHeight / 2 - -120);

    // Draw Start Button
    context.fillStyle = "#ffcc00";
    context.fillRect(startButton.x, startButton.y, startButton.width, startButton.height);
    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.strokeRect(startButton.x, startButton.y , startButton.width, startButton.height);
    context.fillStyle = "black";
    context.font = "30px sans-serif";
    context.fillText("START", boardWidth / 2, startButton.y + 35);

    context.textAlign = "start";
}

function drawGameOverScreen() {
    context.fillStyle = "rgba(0,0,0,0.7)";
    context.fillRect(0, 0, boardWidth, boardHeight);

    context.fillStyle = "white";
    context.textAlign = "center";
    context.font = "45px sans-serif";
    context.fillText("GAME OVER", boardWidth / 2, boardHeight / 2 - 40);
    context.font = "30px sans-serif";
    context.fillText("Score: " + score, boardWidth / 2, boardHeight / 2);

    // Draw Restart Button
    context.fillStyle = "#ffcc00";
    context.fillRect(restartButton.x, restartButton.y, restartButton.width, restartButton.height);
    context.fillStyle = "black";
    context.font = "22px sans-serif";
    context.fillText("RESTART", boardWidth / 2, restartButton.y + 35);

    // Reset textAlign for other drawings if needed
    context.textAlign = "start";
}

function resetGame() {
    bird.y = birdY;
    pipeArray = [];
    score = 0;
    velocityY = 0;
    gameOver = false;
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&   
           a.x + a.width > b.x &&   
           a.y < b.y + b.height &&  
           a.y + a.height > b.y;   
}

function showOfflineScreen() {
    isOffline = true;
    let canvas = document.getElementById("board");
    if (!canvas) return;
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, boardWidth, boardHeight);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = "32px sans-serif";
    ctx.fillText("No Internet Connection", boardWidth / 2, boardHeight / 2 - 20);
    ctx.font = "20px sans-serif";
    ctx.fillText("Please connect to the internet", boardWidth / 2, boardHeight / 2 + 20);
    ctx.textAlign = "start";
}

// Listen for online event to reload the game
window.addEventListener("online", () => location.reload());