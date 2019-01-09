import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return updateObject(state, { counter: state.counter + 1 });
        case actionTypes.REDUCTION:
            return updateObject(state, { counter: state.counter - 1 });
        case actionTypes.INCREMENTSFIVE:
            return updateObject(state, { counter: state.counter + action.val });
        case actionTypes.REDUCESFIVE:
            return updateObject(state, { counter: state.counter - action.val });
    }
    return state;
}

export default reducer;