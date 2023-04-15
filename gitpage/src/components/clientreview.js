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
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from "react-router-dom";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'//import theme (to config some style) 
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReactPlayer from "react-player";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Dialog } from '@mui/material';
import Slider from "react-slick";

export default function Clientview() {
    var settings = {
        autoplaySpeed: 3000,
        autoplay: true,
        speed: 2000,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <Grid container xs={12} sx={{ justifyContent: 'center', mt: '100px' }} >
            <Grid sx={{ width: '60vw' }}>
                <Grid sx={{ textAlign: 'center' }}>
                    <Typography variant='h4' className="serviceMainTitle">CLIENT SAYS</Typography>
                </Grid>
                <Paper sx={{ textAlign: 'center', overflow: 'hidden' }} >

                    <Grid sx={{ justifyContent: 'center', }}>
                        <Slider {...settings}>

                            <Grid container sx={{ justifyContent: 'center', mt: '100px' }} className="text-center justify-content-center">
                                <Grid xs={12}>
                                    <Grid>
                                        <img
                                            className="circleImg"
                                            src="https://picsum.photos/id/1/100/100"
                                            alt=""
                                        ></img>
                                    </Grid>
                                    <Grid>
                                        <h1 className="serviceName">Web Development</h1>
                                    </Grid>
                                    <Grid>
                                        <p className="serviceDescription">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five centuries,
                                            but also the leap into electronic typesetting, remaining
                                            essentially unchanged.
                                        </p>
                                    </Grid>
                                </Grid>
                            </Grid>



                            <Grid container sx={{ justifyContent: 'center', mt: '100px' }} className="text-center justify-content-center">
                                <Grid xs={12}>
                                    <img
                                        className="circleImg"
                                        src="https://picsum.photos/id/1012/100/100"
                                        alt=""
                                    ></img>
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDescription">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a
                                        type specimen book. It has survived not only five centuries,
                                        but also the leap into electronic typesetting, remaining
                                        essentially unchanged.
                                    </p>
                                </Grid>

                            </Grid>


                            <Grid container sx={{ justifyContent: 'center', mt: '100px' }} className="text-center justify-content-center">
                                <Grid xs={12}>
                                    <img
                                        className="circleImg"
                                        src="https://picsum.photos/id/1018/100/100"
                                        alt=""
                                    ></img>
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDescription">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a
                                        type specimen book. It has survived not only five centuries,
                                        but also the leap into electronic typesetting, remaining
                                        essentially unchanged.
                                    </p>
                                </Grid>
                            </Grid>


                        </Slider>
                    </Grid >
                </Paper >
            </Grid >
        </Grid >
    )
}