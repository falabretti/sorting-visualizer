import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';

const BarsContainer = () => {
    return (
        <Grid item xs={12}>
            <Card style={{ height: '60vh'}}>
                <CardContent>
                    123
                </CardContent>
            </Card>
        </Grid>
    );
}

export { BarsContainer };