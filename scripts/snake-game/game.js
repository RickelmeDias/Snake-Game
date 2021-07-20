// Import:
import * as Snake from './snake.js';
import * as Map from './map.js';
import * as Food from './food.js';
import * as UtilsName from './withoutName.js';
import * as Name from '../web/name.js';
import { Key } from './pressedkey.js';

// Variables:
const GameSpeed = 90;


window.onload = function() {

    
    let game        = document.getElementById('snake-game');
    let score       = document.getElementById('game_score');
    let ctxt        = game.getContext("2d");

    window.addEventListener("keydown", Key);
    window.addEventListener("keydown", function(e) {
        if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
    }, false);

    setInterval(game_running, GameSpeed);

    function game_running() {
        if (Player.name != "") {
                Map.createMap(ctxt, game.width, game.height);

                Snake.Move();
                Snake.PositionOutScreen();
                Snake.Update(ctxt, score, Player.name);     
                Food.CheckIfFoodHasEated(score);
                Food.Update(ctxt);
        }else{
                UtilsName.YouNeedChooseAName(ctxt, game.width, game.height);
        }
    }

    

}
