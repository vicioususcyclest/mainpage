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
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from "react-router-dom";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'//import theme (to config some style) 


export default function Topbanner() {
    return (
        <Grid container className="BannerPhoto" sx={{ height: '600px', justifyContent: 'center' }} >
            <Grid sx={{ mt: '100px', justifyContent: 'center', textAlign: 'center' }} >
                <h1 className="topTitle">SOFTWARE ENGINEER</h1>
                <h4 className="topSubTitle">Mobile & Web Application</h4>
                <Button variant="primary">More Info</Button>
            </Grid>
        </Grid>
    )
}