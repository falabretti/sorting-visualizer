import React from 'react';
import { Card, CardContent, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { changeParam, randomize, sort } from '../_actions/sort.actions';

const Options = () => {
    const dispatch = useDispatch();
    const { type, size } = useSelector(state => state.sort.params);
    const values = useSelector(state => state.sort.values);

    const sortTypes = [
        { value: 'BUBBLE_SORT', label: 'Bubble Sort' },
        { value: 'HEAP_SORT', label: 'Heap Sort' },
        { value: 'MERGE_SORT', label: 'Merge Sort' },
        { value: 'QUICK_SORT', label: 'Quick Sort' },
        { value: 'SELECTION_SORT', label: 'Selection Sort' }
    ];

    const handleChange = (event) => {
        const { name, value } = event.target;
        dispatch(changeParam(name, value));
    }

    const handleRandomize = event => {
        dispatch(randomize());
    }

    const handleSort = event => {
        dispatch(sort(values));
    }


    return (
        <Card className="options-card">
            <CardContent style={{ display: 'flex', alignItems: 'flex-end' }} className="actions-container">

                <TextField type="number" label="N° of values" name="size" value={size} onChange={handleChange} />
                <Button onClick={handleRandomize} variant="contained" color="primary">Ranzomize</Button>

                <FormControl>
                    <InputLabel>Sort type</InputLabel>
                    <Select name="type" value={type} onChange={handleChange} style={{ width: '150px' }}>
                        {sortTypes.map((type, idx) => (
                            <MenuItem key={`${type}-${idx}`} value={type.value}>{type.label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button onClick={handleSort} variant="contained" color="primary">Sort</Button>

            </CardContent>
        </Card>
    );
}

export { Options };