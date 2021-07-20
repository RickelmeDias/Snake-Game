async function getContent() {
    try {
        const response = await fetch('http://localhost:3003/rank');
        // console.log(response);  
        const data = await response.json();
        // console.log(data);
        showJson(data);
        console.log(data);
    } catch (error) {
        // console.error(error);  
    }
}

function showJson(users) {
    let output = '';
    let i = 0;

    for (let user of users) {
        i++;
        output += `<div class="rank-name"><li>${i} - ${user.name}</li></div><div class="rank-points"><li>${user.score}</li></div>`
    }

    document.getElementById('score-rank').innerHTML = output;
}

window.onload = function () {

    getContent();

}
