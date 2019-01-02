const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case 'REDUCTION':
            return {
                ...state,
                counter: state.counter -1}
        case 'INCREMENTSFIVE':
            return {
                ...state,
                counter: state.counter + action.val}
        case 'REDUCESFIVE':
            return {
                ...state,
                counter: state.counter - action.val}
        case 'STORE_RESULTS':
            return {
                ...state,
                results: state.results.concat({id: new Date() ,value: state.counter})
            }
        case 'DELETE_RESULTS':
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            const updatedArray = state.results.filter( results => results.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
}

export default reducer;