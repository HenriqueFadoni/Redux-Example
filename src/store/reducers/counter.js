import * as actionTypes from '../actions/actions';

const initialState = {
    counter: 0
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
                counter: state.counter -1
            }
        case actionTypes.INCREMENTSFIVE:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.REDUCESFIVE:
            return {
                ...state,
                counter: state.counter - action.val
            }
    }
    return state;
}

export default reducer;