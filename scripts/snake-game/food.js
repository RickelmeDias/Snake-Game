import { Snake } from './snake.js';

class FoodClass {
    // Constructor:

    constructor(startPosition_X, startPosition_Y, SquareSize) {
        this._px = startPosition_X;    // Pos Y
        this._py = startPosition_Y;    // Pos X
    }

}

export const Food = new FoodClass(0, 0, 30);

export function Update(ctx_game) {
    ctx_game.fillStyle = 'rgb(245, 71, 72)';
    ctx_game.fillRect(Food._px * Snake._sizeSquare, Food._py * Snake._sizeSquare, Snake._sizeSquare, Snake._sizeSquare);
}

export function CheckIfFoodHasEated(score) {
    // Eating food:
    if (Food._px == Snake._px && Food._py == Snake._py) {
        // snd_gettingFood.play();

        Snake.snakeAdd();
        Food._px = Math.floor(Math.random() * Snake._am);
        Food._py = Math.floor(Math.random() * Snake._am);
        score.innerHTML = `Score: ${Snake._score}`;
    }
}
