import axios from 'axios';
import { GET_POSTS, GET_USERS, FETCH_POSTS, FETCH_USERS } from './Type'
const baseUrl = 'https://jsonplaceholder.typicode.com'

export const fetching = (dispatch, url, data) => {
    if (data) {
        dispatch({type: GET_USERS, data})
    }else {
        let type;
        switch(url) {
            case FETCH_USERS:
                 type = GET_USERS;
                 break;
            case FETCH_POSTS:
                 type = GET_POSTS;
                 break;
            default:
                 type = ""
                 break;
        }
        axios.get(`${baseUrl}/${url}`).then(({data}) => dispatch({type, data}))
    }
};

//helpers


