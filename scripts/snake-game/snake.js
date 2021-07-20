import * as post from '../post/post.js'

class SnakeClass {
    // Constructor:

    constructor(startPosition_X, startPosition_Y, SquareSize) {
        this._px = startPosition_X;    // Pos Y
        this._py = startPosition_Y;    // Pos X

        this._sx = 0;                  // Speed X
        this._sy = 0;                  // Speed Y

        this._am = 20;

        this._size = 3;
        this._trail = [];

        this._sizeSquare = SquareSize;
        this._speed = 1;

        this._score = 0;
    }

    // Parameters:
    // Get:

    // Set:
    /**
     * @param {number} sx
     */
    set speedX(sx) {
        this._sx = sx;
    }

    /**
     * @param {number} sy
     */
    set speedY(sy) {
        this._sy = sy;
    }


    // Functions:
    snakeAdd() {
        this._score++;
        this._size++;
    }

    // Functions:
    snakeReset() {

        this._score = 0;
        this._size = 3;


    }
}


export const Snake = new SnakeClass(0, 0, 30);

// Functions for Snake movement:


export function PositionOutScreen() {
    if (Snake._px > Snake._am - 1) {
        Snake._px = 0;
    }

    if (Snake._px < 0) {
        Snake._px = Snake._am;
    }

    if (Snake._py > Snake._am - 1) {
        Snake._py = 0;
    }

    if (Snake._py < 0) {
        Snake._py = Snake._am;
    }

}

export function Move() {
    Snake._px += Snake._sx;
    Snake._py += Snake._sy;
}

export function Update(ctx_game, score, name) {
    ctx_game.fillStyle = 'rgb(245, 230, 202)';


    for (var s = 0; s < Snake._trail.length; s++) {
        ctx_game.fillRect(
            Snake._trail[s].x * Snake._sizeSquare,
            Snake._trail[s].y * Snake._sizeSquare,
            Snake._sizeSquare - 1,
            Snake._sizeSquare - 1);

        if (Snake._trail[s].x == Snake._px && Snake._trail[s].y == Snake._py) {
            if (Snake._score > 5) {
                post.postContent(name, Snake._score);
                alert('Your scored has added on web/rank')
                location.href = '#';

            }

            Snake.speedX = Snake.speedY = 0;
            Snake.snakeReset();
            score.innerHTML = `Score: ${Snake._score}`;
        }
    }

    Snake._trail.push({ x: Snake._px, y: Snake._py });
    while (Snake._trail.length > Snake._size) {
        Snake._trail.shift();
    }


}