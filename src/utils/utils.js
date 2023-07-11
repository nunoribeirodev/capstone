import { fetchAPI } from "./api";

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'addTimes':
            const newDate = new Date(action.payload);
            return fetchAPI(newDate);
        default:
            return state;
    }
}

export const initializeTimes = () => {
    return fetchAPI(new Date());
}

