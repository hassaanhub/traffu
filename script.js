// game.js

$(document).ready(function() {
    const gameContainer = $('.game-container');
    const playerCar = $('#player-car');
    const enemyCars = $('.enemy-car');
    const scoreElement = $('#score');
    let gameInterval;
    let enemySpeed = 3;
    let score = 0;
    let playerPosition = 50;  // Player's position as percentage of road width
    let moveLeft = false;
    let moveRight = false;

    // Update enemy car positions
    function moveEnemies() {
        enemyCars.each(function() {
            const car = $(this);
            let currentTop = parseInt(car.css('top'));
            if (currentTop > gameContainer.height()) {
                car.css('top', '-100px');  // Reset car to top
                score++;
                scoreElement.text(score);
            } else {
                car.css('top', currentTop + enemySpeed + 'px');
            }
        });
    }

    // Handle player car movement
    function movePlayerCar() {
        if (moveLeft && playerPosition > 0) {
            playerPosition -= 2;
        } else if (moveRight && playerPosition < 100) {
            playerPosition += 2;
        }
        playerCar.css('left', playerPosition + '%');
    }

    // Collision detection
    function checkCollision() {
        enemyCars.each(function() {
            const enemyCar = $(this);
            const playerCarOffset = playerCar.offset();
            const enemyCarOffset = enemyCar.offset();
            
            // Check for collision
            if (playerCarOffset.left < enemyCarOffset.left + enemyCar.width() &&
                playerCarOffset.left + playerCar.width() > enemyCarOffset.left &&
                playerCarOffset.top < enemyCarOffset.top + enemyCar.height() &&
                playerCarOffset.top + playerCar.height() > enemyCarOffset.top) {
                gameOver();
            }
        });
    }

    // Game Over
    function gameOver() {
        clearInterval(gameInterval);
        alert('Game Over! Your score is: ' + score);
        location.reload();  // Reload the game
    }

    // Game loop
    function gameLoop() {
        moveEnemies();
        movePlayerCar();
        checkCollision();
    }

    // Key event listeners for movement
    $(document).keydown(function(event) {
        if (event.key === 'ArrowLeft') {
            moveLeft = true;
        } else if (event.key === 'ArrowRight') {
            moveRight = true;
        }
    });

    $(document).keyup(function(event) {
        if (event.key === 'ArrowLeft') {
            moveLeft = false;
        } else if (event.key === 'ArrowRight') {
            moveRight = false;
        }
    });

    // Start the game
    gameInterval = setInterval(gameLoop, 20);  // 50 FPS
});
