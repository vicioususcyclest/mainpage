import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from "react-router-dom";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'//import theme (to config some style) 
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Summary() {

    return (
        <Grid container xs={12} sx={{ justifyContent: 'space-around', textAlign: 'center', mt: '10%', alignItems: 'center' }}>
            <Grid container sx={{ justifyContent: 'space-around' }} spacing={8}>
                <Grid container lg={8} md={6} sm={12} sx={{ alignItems: 'center' }}>
                    <Grid container className="countSection" spacing={4} sx={{ justifyContent: 'center' }}>
                        <Grid >
                            {/* <h1 className="countNumber">
                                <CountUp start={0} end={100}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h1> */}
                            <Typography variant='h3' >100</Typography>
                            <Typography variant='h4' className="countTitle">Total Projects</Typography>
                            <hr
                                className="bg-white w-25"
                                style={{ margin: "auto" }}
                            />
                        </Grid>
                        <Grid>
                            {/* <h1 className="countNumber">
                                <CountUp start={0} end={100}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h1> */}
                            <Typography variant='h3' >100</Typography>
                            <Typography variant='h4' className="countTitle">Total Clients</Typography>
                            <hr
                                className="bg-white w-25"
                                style={{ margin: "auto" }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid lg={4} md={6} sm={12}>
                    <Card className="workCard" sx={{ minWidth: '300px', textAlign: 'start' }}>


                        <CardContent>
                            <Typography variant='h4'>
                                How I Work
                            </Typography>
                            <Divider /><br />
                            <Typography className="cardSubTitle text-justify">
                                <CheckCircleIcon
                                    className="iconBullet"
                                />{" "}
                                Requirement Gathering{" "}
                            </Typography>
                            <Typography className="cardSubTitle text-justify">
                                <CheckCircleIcon
                                    className="iconBullet"

                                />{" "}
                                System Analysis{" "}
                            </Typography>
                            <Typography className="cardSubTitle text-justify">
                                <CheckCircleIcon
                                    className="iconBullet"

                                />{" "}
                                Coding Testing{" "}
                            </Typography>

                            <Typography className="cardSubTitle text-justify">
                                <CheckCircleIcon
                                    className="iconBullet"
                                />{" "}
                                Implementation{" "}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
}
