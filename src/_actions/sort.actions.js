import { sortConstants } from '../_constants/sort.constants';

export function randomize() {
    return { type: sortConstants.RANDOMIZE_VALUES };
}

export function changeParam(prop, value) {
    return { type: sortConstants.CHANGE_PARAM, payload: { prop, value } };
}

export function updateValues(values) {
    return { type: sortConstants.UPDATE_VALUES, payload: values };
}

export function sort(values) {
    return async dispatch => {
        const valuesCopy = [...values];

        let start_idx = 0;
        while (start_idx < valuesCopy.length) {
            let smaller_idx = start_idx;

            for (let i = start_idx; i < valuesCopy.length; i++) {

                setColor(i, 'orange');
                setColor(smaller_idx, 'green');
                await new Promise(r => setTimeout(r, 1));

                if (valuesCopy[i] < valuesCopy[smaller_idx]) {
                    setColor(smaller_idx, '#3B8CDE');
                    smaller_idx = i;
                }

                setColor(i, '#3B8CDE');
                setColor(smaller_idx, '#3B8CDE');
            }

            [valuesCopy[start_idx], valuesCopy[smaller_idx]] = [valuesCopy[smaller_idx], valuesCopy[start_idx]];
            dispatch(updateValues([...valuesCopy]));
            start_idx++;
        }
    }
}

function setColor(idx, color) {
    document.getElementById(`bar-${idx}`).style.backgroundColor = color;
}