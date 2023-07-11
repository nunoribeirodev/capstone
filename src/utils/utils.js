export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'addTimes':
            return ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:30'];
        default:
            return state;
    }
}

export const initializeTimes = () => {
    return ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:30'];
}

