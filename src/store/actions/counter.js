import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const reduction = () => {
    return {
        type: actionTypes.REDUCTION
    };
};

export const incrementsFive = value => {
    return {
        type: actionTypes.INCREMENTSFIVE,
        val: value
    };
};

export const reducesFive = value => {
    return {
        type: actionTypes.REDUCESFIVE,
        val: value
    };
};