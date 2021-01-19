import React from 'react';
import './Cards.css';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from 'react-countup';

function Cards({ data }) {
    console.log(data.recovered)
    if (!data.cases) {
        return (
            <h1>Loading</h1>
        )
    } else {
        return (
            <div className="cards">
                <Grid container spacing={3} justify="center">
                    <Grid item component={Card} xs={12} md={3} style={{ margin: "20px", borderBottom: "10px solid rgba(0,0,255,0.5)"}}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={data.cases}
                                    duration={2.5}
                                    separator=","
                                />
                            </Typography>
                            <Typography color="textSecondary"></Typography>
                            <Typography variant="body2">
                                <CountUp
                                    start={0}
                                    end={data.active}
                                    duration={2.5}
                                    separator=","
                                />
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} style={{margin:"20px",borderBottom: "10px solid rgba(0,255,0,0.5)"}}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={data.recovered}
                                    duration={2.5}
                                    separator=","
                                />
                            </Typography>
                            <Typography color="textSecondary">Real Date</Typography>
                            <Typography variant="body2">Number of recovered cases</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} style={{margin:"20px",borderBottom: "10px solid rgba(255,0,0,0.5)"}}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={data.deaths}
                                    duration={2.5}
                                    separator=","
                                />
                            </Typography>
                            <Typography color="textSecondary">Real Date</Typography>
                            <Typography variant="body2">
                                <CountUp
                                    start={0}
                                    end={data.todayDeaths}
                                    duration={2.5}
                                    separator=","
                                />
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Cards
