async function getContent() {
    try {
        const response = await fetch(Routes.get_route());
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
        output += `<div class="rank-name"><ul><li>${i} - ${user.name}</li></ul></div><div class="rank-points"><ul><li>${user.score}</li></ul></div>`
    }

    document.getElementById('score-rank').innerHTML = output;
}

window.onload = function () {
    
    getContent();

}
