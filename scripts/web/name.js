const Player = { name: "" };

function executeName(name) {
        document.getElementById('game_name').innerHTML = `${name}`;
        Player.name = name;
        Object.freeze(Player);
}
