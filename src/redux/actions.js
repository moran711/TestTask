import {CHANGE_MONTH_HOVER, FETCH_USERS, CHANGE_CONTENT, SHOW_LOADER, HIDE_LOADER} from './types';
import {dateToMonth, monthNumToStr} from '../utils/utils';

export function changeMonthHover(month) {
    return {
        type: CHANGE_MONTH_HOVER,
        month
    };
}

export function fetchUsers() {
    return async dispatch => {
        dispatch(showLoader());
        const responce = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users');
        const json = await responce.json();
        dispatch({
            type: FETCH_USERS,
            payload: json
        });
        dispatch(hideLoader());
    };
}

export function changeContent(month, userList) {
    if (month !== 'none') {
        const content = userList.filter(user => monthNumToStr(dateToMonth(user.dob)) === month);
        return {
            type: CHANGE_CONTENT,
            content
        };
    } else {
        return {
            type: CHANGE_CONTENT,
            content: []
        };
    };
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    };
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    };
}
