import {CHANGE_MONTH_HOVER} from "./types";

const initialState = {
    monthIsHover: 'none',
    monthList: [
        {
            month: 'January',
            key: 1
        },
        {
            month: 'February',
            key: 2
        },
        {
            month: 'March',
            key: 3
        },
        {
            month: 'April',
            key: 4
        },
        {
            month: 'May',
            key: 5
        },
        {
            month: 'June',
            key: 6
        },
        {
            month: 'July',
            key: 7
        },
        {
            month: 'August',
            key: 8
        },
        {
            month: 'September',
            key: 9
        },
        {
            month: 'October',
            key: 10
        },
        {
            month: 'November',
            key: 11
        },
        {
            month: 'December',
            key: 12
        }
    ],
};

export const monthReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MONTH_HOVER: 
            return {
                ...state,
                monthIsHover: action.month
            };
        default: return state;
    };
}
