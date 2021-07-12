import { Snake } from './snake.js';

let lastKey = 0;

export function Key(event) {
    // Functions:
    
    
        let keyPressed = event.keyCode;
        
            if ( keyPressed == 37 && lastKey != 39 ) { // Left
                Snake.speedX = -Snake._speed;
                Snake.speedY = 0;
                lastKey = keyPressed;
            }

            if ( keyPressed == 39 && lastKey != 37 ) { // Right 
                Snake.speedX = Snake._speed;
                Snake.speedY = 0;
                lastKey = keyPressed;
            }

            if ( keyPressed == 40 && lastKey != 38 ) { // Down
                Snake.speedX = 0;
                Snake.speedY = Snake._speed;
                lastKey = keyPressed;
            }

            if ( keyPressed == 38 && lastKey != 40 ) { // Down
                Snake.speedX = 0;
                Snake.speedY = -Snake._speed;
                lastKey = keyPressed;
            }
    
}