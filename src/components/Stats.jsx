import React from 'react';
import { StatsCard } from './StatsCard';
import { Grid } from '@material-ui/core';

const Stats = () => {
    return (
        <Grid item xs={12}>
            <Grid container spacing={3} justify="center" align="center" className="stats-container">
                <StatsCard title="Operations:" value="123" />
            </Grid>
        </Grid>
    );
}

export { Stats };