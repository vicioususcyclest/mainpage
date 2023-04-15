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

export default function Video() {

    var [modalopen, setmodalopen] = React.useState(false)
    const modalOpen = () => { setmodalopen(!modalopen); }


    return (
        <Grid container sx={{ justifyContent: 'center', mt: '100px' }} >
            <Grid sx={{ width: '60vw' }}>
                <Paper xs={12} className="videoCard" sx={{ textAlign: 'center' }}>
                    <Grid>
                        <Typography variant='h4' className="videoTitle">How I Do</Typography>
                        <Typography className="videoDes">
                            First i analysis the requirement of project. According to the
                            requirement i make a proper technical analysis, then i build a
                            software architecture. According to the planning i start
                            coding. Testing is also going on with coding. Final testing
                            take place after finishing coding part. After successful
                            implementation i provide 6 month free bug fixing service for
                            corresponding project.
                        </Typography>
                        <Typography>
                            <PlayCircleIcon color='primary' sx={{ fontSize: 40, }}
                                onClick={modalOpen}
                            />
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>


            <Dialog open={modalopen} onClose={modalOpen} fullWidth maxWidth="md">
                <DialogContent >
                    <ReactPlayer
                        light={true}
                        controls
                        width="100%"
                        url="https://www.youtube.com/watch?v=CnQ8N1KacJc"
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={modalOpen}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid >
    )
}

