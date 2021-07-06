

window.onload = function () {
    const Snake = {
        spd: 1,
        score: 0
    };
    
    // Creating game:
    let stage_game  =   document.getElementById('game_stage');
    let score_game  =   document.getElementById('game_score');
    let ctx_game    =   stage_game.getContext("2d");

    // Keyboard check key pressed: 
    document.addEventListener("keydown", keyPush);

    // Disable page movement by keys:
    window.addEventListener("keydown", function(e) {
        if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
    }, false);

    // Game frame update:
    setInterval(game_running, 80);

    // Setting position variables:
    let sx = 0, sy = 0,
        px = 10, py = 10,
        sz = 30,                // square size
        am = 20,                // square am(ount)
        fx = fy = 15;
        
    let trail = []; 
    let snake_size = 3;

    function game_running() {
        px += sx;
        py += sy;
        
            snakePositionOut();
            createBackground();
            createFood();
            createSnake();
    
    }
        
        
    // Audio 
    var snd_gettingFood = document.getElementById("sndFood");

        // Functions:
        let lastKey = 0;
            function keyPush(event) {
                let keyPressed = event.keyCode;
                
                    if ( keyPressed == 37 && lastKey != 39 ) { // Left
                        sx = -Snake.spd;
                        sy = 0;
                        lastKey = keyPressed;
                    }

                    if ( keyPressed == 39 && lastKey != 37 ) { // Right 
                        sx = Snake.spd;
                        sy = 0;
                        lastKey = keyPressed;
                    }

                    if ( keyPressed == 40 && lastKey != 38 ) { // Down
                        sx = 0;
                        sy = Snake.spd;
                        lastKey = keyPressed;
                    }

                    if ( keyPressed == 38 && lastKey != 40 ) { // Down
                        sx = 0;
                        sy = -Snake.spd;
                        lastKey = keyPressed;
                    }
            }

            function snakePositionOut() {
                if (px > am-1) {
                    px = 0;
                }

                if (py > am-1) {
                    py = 0;
                }

                if (py < 0) {
                    py = am;
                }

                if (px < 0) {
                    px = am;
                }
            }
            

            function createBackground() {
                ctx_game.fillStyle = 'rgb(52, 63, 86)';
                ctx_game.fillRect(0, 0, stage_game.width, stage_game.height);
            }

            function createFood() {
                ctx_game.fillStyle = 'rgb(245, 71, 72)';
                ctx_game.fillRect(fx*sz, fy*sz, sz, sz);
            }

            function createSnake() {
            ctx_game.fillStyle = 'rgb(245, 230, 202)';

                for ( var s = 0; s < trail.length; s++) {
                    ctx_game.fillRect(
                                        trail[s].x*sz,
                                        trail[s].y*sz,
                                        sz-1, sz -1     );

                    if (trail[s].x == px && trail[s].y == py) {
                        sx = sy = 0;
                        snake_size = 3;
                        Snake.score = 0;
                        score_game.innerHTML = `${Snake.score}`;
                    }
                }


                trail.push({ x:px, y:py })
                while (trail.length > snake_size) {
                    trail.shift();
                }

                // Eating food:
                if (fx == px && fy == py){
                    snd_gettingFood.play();
                    
                    Snake.score++;
                    snake_size++;
                    fx = Math.floor(Math.random()*am);
                    fy = Math.floor(Math.random()*am);
                    score_game.innerHTML = `Score: ${Snake.score}`;
                }
        
    }
}

