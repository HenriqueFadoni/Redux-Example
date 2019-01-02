import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.REDUCTION:
            return {
                ...state,
                counter: state.counter -1}
        case actionTypes.INCREMENTSFIVE:
            return {
                ...state,
                counter: state.counter + action.val}
        case actionTypes.REDUCESFIVE:
            return {
                ...state,
                counter: state.counter - action.val}
        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results: state.results.concat({id: new Date() ,value: state.counter})
            }
        case actionTypes.DELETE_RESULTS:
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