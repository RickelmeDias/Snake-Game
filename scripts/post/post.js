export function postContent(name, score) {
    try {
        const urlPost = 'http://localhost:3003/rank';

        var xhr = new XMLHttpRequest();
        // console.log(xhr);

        const body = {
            name: `${name}`,
            score: score
        }

        console.log(body);

        xhr.open("POST", urlPost, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(body));

    } catch (error) {
        console.error(error);
    }

}

