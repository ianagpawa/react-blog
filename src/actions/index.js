import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PI314159265432PI'

export function fetchPosts(){
    const request = axious.get(`${ROOT_URL}/posts/${API_KEY}`)

    return {
        type: FETCH_POSTS.
        payload: request
    };
}
