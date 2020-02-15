import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const StatsCard = ({ title, value }) => {
    return (
        <Grid item xs={3}>
            <Card>
                <CardContent>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h5">{title}</Typography>
                        <Typography variant="h4">{value}</Typography>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    );
}

export { StatsCard };