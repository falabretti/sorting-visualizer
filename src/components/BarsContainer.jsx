import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import { Bar } from './Bar';

const BarsContainer = () => {

    const count = 300;
    const bars = [];

    for (let i = 0; i < count; i++) {
        const value = Math.ceil(Math.random() * 150);
        bars.push(value);
    }

    return (
        <Grid item xs={12}>
            <Card style={{ height: '60vh' }}>
                <CardContent style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                    {bars.map((value, idx) => (
                        <Bar key={`${value}-${idx}`} width={100 / count} height={value * 3} />
                    ))}
                </CardContent>
            </Card>
        </Grid>
    );
}

export { BarsContainer };