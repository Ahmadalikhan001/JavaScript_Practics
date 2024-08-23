import React from 'react';
import { Grid } from '@mui/material';
import Card from './components/Card';

const CardContainer = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card
                    title="Main System FTA"
                    lastEdited="2 days ago"
                    nodeCount={42}
                    gatesCount={15}
                    requirementsCount={28}
                />
            </Grid>
            {/* Add more <Grid> items with <Card /> as needed */}
        </Grid>
    );
};

export default CardContainer;
