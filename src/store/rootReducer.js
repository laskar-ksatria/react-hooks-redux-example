import { GET_POSTS, GET_USERS, GET_ERRORS } from './Type';

const initialState = {
    users: null,
    posts: null,
    error: {
        isLogin: false
    }
};

const rootReducer = ((state = initialState, action) => {
    let { type, data } = action;
    switch(type) {
        case GET_USERS:
            return {...state, users: data};
        case GET_POSTS:
            return {...state, posts: data};
        case GET_ERRORS:
            return {...state, error: {isLogin: true}};
        default: 
            return state;
    };
});

export default rootReducer;