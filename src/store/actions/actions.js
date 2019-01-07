export const INCREMENT = 'INCREMENT';
export const REDUCTION = 'REDUCTION';
export const INCREMENTSFIVE = 'INCREMENTSFIVE';
export const REDUCESFIVE = 'REDUCESFIVE';
export const STORE_RESULTS = 'STORE_RESULTS';
export const DELETE_RESULTS = 'DELETE_RESULTS';

export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const reduction = () => {
    return {
        type: REDUCTION
    };
};

export const incrementsFive = value => {
    return {
        type: INCREMENTSFIVE,
        val: value
    };
};

export const reducesFive = value => {
    return {
        type: REDUCESFIVE,
        val: value
    };
};

export const storeResult = res => {
    return {
        type: STORE_RESULTS,
        result: res
    };
};

export const deleteResult = resElId => {
    return {
        type: DELETE_RESULTS,
        resultElId: resElId
    };
};
