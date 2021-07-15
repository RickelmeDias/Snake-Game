function postContent () {
    try {
        const urlPost = 'https://cobrinha-backend.herokuapp.com/users';

        var xhr = new XMLHttpRequest();
        console.log(xhr);

        body = {
            name: "Test2",
            points: 165
        }

        console.log(body);

        xhr.open("POST", urlPost, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(body));
        
    } catch (error) {
        console.error(error);  
    }

}

