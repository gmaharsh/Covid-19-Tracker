import React from 'react';
import './Cards.css';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

function Cards({ data }) {
    console.log("From Card Component:-", data)
    return (
        <div className="cards">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">Real Data</Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of active cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">Real Data</Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of recovered cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">Real Data</Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
