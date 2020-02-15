import React from 'react';
import { Card, CardContent, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

const Options = () => {
    return (
        <Card style={{ width: 'max-content', marginTop: '24px' }}>
            <CardContent style={{ display: 'flex', alignItems: 'flex-end' }} className="actions-container">
                <TextField type="number" label="N° of values" />
                <Button variant="contained" color="primary">Ranzomize</Button>
                <FormControl>
                    <InputLabel>Sort type</InputLabel>
                    <Select style={{ width: '150px' }}>
                        <MenuItem value={1}>Bubble Sort</MenuItem>
                        <MenuItem value={2}>Heap Sort</MenuItem>
                        <MenuItem value={3}>Merge Sort</MenuItem>
                        <MenuItem value={4}>Quick Sort</MenuItem>
                        <MenuItem value={5}>Selection Sort</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary">Sort</Button>
            </CardContent>
        </Card>
    );
}

export { Options };