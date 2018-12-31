const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {counter: state.counter + 1}
            break;
        case 'REDUCTION':
            return {counter: state.counter -1}
            break;
        case 'INCREMENTSFIVE':
            return {counter: state.counter + action.val}
            break;
        case 'REDUCESFIVE':
            return {counter: state.counter - action.val}
            break;
    }
    return state;
}

export default reducer;