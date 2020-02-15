import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import { Bar } from './Bar';
import { useSelector, useDispatch } from 'react-redux';
import { randomize } from '../_actions/sort.actions';

const BarsContainer = () => {
    const dispatch = useDispatch();
    const values = useSelector(state => state.sort.values);

    if (!(values && values.length)) {
        dispatch(randomize());
    }

    return (
        <Grid item xs={12}>
            <Card className="bars-card">
                <CardContent className="bars-container">
                    {values.map((value, idx) => (
                        <Bar id={`bar-${idx}`} key={`${value}-${idx}`} width={100 / values.length} height={value} />
                    ))}
                </CardContent>
            </Card>
        </Grid>
    );
}

export { BarsContainer };