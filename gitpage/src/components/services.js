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

export default function Services() {
    return (
        <Grid container xs={12} sx={{ justifyContent: 'center', textAlign: 'center' }}>
            <Grid xs={12} sx={{ mb: '50px' }}>
                <Typography variant='h5' className="serviceMainTitle">MY SERVICES</Typography>
            </Grid>
            <Grid container sx={{ justifyContent: 'space-evenly', }} spacing={3}>
                <Grid lg={4} md={6} sm={12} sx={{ justifyContent: 'center', maxWidth: '300px' }}>
                    <Card className="serviceCard text-center" sx={{ minHeight: '300px' }}>
                        <CardMedia />
                        <CardContent>
                            <Typography gutterBottom variant="h6">
                                Web Development
                            </Typography>
                            <Typography gutterBottom >
                                I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid lg={4} md={6} sm={12} sx={{ justifyContent: 'center', maxWidth: '300px' }}>
                    <Card className="serviceCard text-center " sx={{ minHeight: '300px' }} >
                        <CardMedia />
                        <CardContent>
                            <Typography gutterBottom variant="h6">
                                Mobile Development
                            </Typography>
                            <Typography gutterBottom >
                                I build native and cross platfrom mobile app for your business and instiution as per as your requirements.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid lg={4} md={6} sm={12} sx={{ justifyContent: 'center', maxWidth: '300px' }}>
                    <Card className="serviceCard text-center" sx={{ minHeight: '300px' }}>
                        <CardMedia />
                        <CardContent>
                            <Typography gutterBottom variant="h6">
                                Graphics Design
                            </Typography>
                            <Typography gutterBottom >
                                I desing modern user interface and other graphical components for your business and instiution.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}