export function YouNeedChooseAName(ctx_game,width,height) {
    // Eating food:

    ctx_game.fillStyle = 'rgb(52, 63, 86)';
    ctx_game.fillRect(0, 0, width, height);

    ctx_game.font = "30px Lato";
    ctx_game.fillStyle = "rgb(245, 71, 72)";
    ctx_game.textAlign = "center";
    ctx_game.fillText("Name cannot be null to play.", width/2, height/2 - 30);
    ctx_game.fillText("Please F5 this page and choose it!", width/2, height/2 + 30);
}