import { sortConstants } from "../_constants/sort.constants";

const initialState = {
    values: [],
    params: {
        type: 'SELECTION_SORT',
        size: 100,
        range: 450
    }
}

export function sort(state = initialState, action) {
    switch (action.type) {
        case sortConstants.RANDOMIZE_VALUES:
            const values = [];
            for (let i = 0; i < state.params.size; i++) {
                const value = Math.ceil(Math.random() * state.params.range);
                values.push(value);
            }
            return { ...state, values };
        case sortConstants.CHANGE_PARAM:
            const { prop, value } = action.payload;
            return { ...state, params: { ...state.params, [prop]: value } };
        case sortConstants.SORT_VALUES:
            return { ...state, values: action.payload };
        case sortConstants.UPDATE_VALUES:
            return { ...state, values: action.payload };
        default:
            return state;
    }
}