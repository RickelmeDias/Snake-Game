const json = 
`
{



    "frontend": {
        "name": "Snake-Game",
        "address": "https://rickelmedias.github.io/"
    },

    "backend": {
        "name": "Snake-Game",
        "address": "http://localhost:3003",
        "end-points": {
            "gets": {
                "rank": "/rank"
            },
            "posts": {
                "rank": "/rank"
            }
        }
    }



}
`








/*
    Functions to get it in other code parts
*/




const routes = JSON.parse(json);

const Routes = {
        get_route () {
            const get_address  = routes.backend.address;
            const get_endpoint = routes.backend['end-points'].posts.rank;

            return `${get_address+get_endpoint}`
        },
        post_route () {
            const post_address  = routes.backend.address;
            const post_endpoint = routes.backend['end-points'].gets.rank;

            return `${post_address+post_endpoint}`
        },

        frontend_route() {
            const frontend_address = routes.frontend.address;

            return `${frontend_address}`
        },

        origin() {
            const frontend_address = routes.frontend.address;

            return `${frontend_address}`
        },

        gotoRank() {
            return '../../Snake-Game/pages/rank/rank.html';
        }


}