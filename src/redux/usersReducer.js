import {FETCH_USERS, CHANGE_CONTENT} from './types';

const initialState = {
    content: [],
    users: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {...state, users: action.payload};
        case CHANGE_CONTENT:
            return {...state, content: action.content};
        default: return state;
    };
}
