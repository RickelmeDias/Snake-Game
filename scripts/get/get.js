async function getContent () {
    try {
        const response = await fetch('https://cobrinha-backend.herokuapp.com/users');
        console.log(response);  
        const data = await response.json();
        console.log(data);
        showJson(data);
    } catch (error) {
        console.error(error);  
    }
}

function showJson(users) {
    let output = '';
    let i = 0;

    for (let user of users) {
        i++;
        output += `<div class="rank-name"><li>${i} - ${user.name}</li></div><div class="rank-points"><li>${user.points}</li></div>`
    }

    document.getElementById('score-rank').innerHTML = output;
}

window.onload = function() {

    getContent ();

}
