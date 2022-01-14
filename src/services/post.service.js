import {urls} from "../configs/urls";

const getById = (userId) =>{
    return fetch(`${urls.posts}?userId=${userId}`)
        .then(value => value.json())
}

export const postService = {
    getById
}