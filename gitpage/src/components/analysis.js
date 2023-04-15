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

import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";

export default function Anlysis() {

    var data = [
        // each object is a bar
        {
            Technology: "Java", // x-axis
            Projects: 100 // y-axis
        },
        {
            Technology: "Kotlin",
            Projects: 40
        },
        {
            Technology: "SQL",
            Projects: 90
        },
        {
            Technology: "Bootstrap",
            Projects: 95
        },
        {
            Technology: "JQuery",
            Projects: 60
        },
        {
            Technology: "React",
            Projects: 90
        },
        {
            Technology: "PHP",
            Projects: 100
        },
        {
            Technology: "Angular",
            Projects: 65
        }
    ]
    var blue = "rgba(0, 115, 230, 0.8)";

    return (
        <Grid container sx={{ justifyContent: 'center', textAlign: 'center', mt: '10%' }}>
            <Grid sx={{ mb: '50px' }}>
                <Typography variant='h4'>Technology Used</Typography>
            </Grid>
            <Grid xs={12} container sx={{ justifyContent: 'center' }}>
                <Grid
                    style={{ maxWidth: "1000px", height: "300px" }}
                    lg={6}
                    md={12}
                    sm={12}
                >
                    {/* setting the col width and height will not work.
                we have to make the barchart responsive */}
                    <ResponsiveContainer>
                        <BarChart width={100} height={300} data={data}>
                            <XAxis dataKey="Technology"></XAxis>
                            <Tooltip></Tooltip>
                            <Bar dataKey="Projects" fill={blue}></Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>

                <Grid lg={6} md={12} sm={12} sx={{ display: 'flex', textAlign: 'start', alignItems: 'center', maxWidth: { xs: '1000px', lg: '400px' } }} >
                    <Typography>
                        Consectetur aute cillum commodo do nostrud occaecat fugiat
                        cillum proident incididunt officia est. Do consectetur ipsum ea
                        laborum sunt minim labore consectetur enim fugiat nulla tempor
                        cupidatat. Non qui exercitation fugiat tempor non in. Amet id
                        dolor ad eu cupidatat et nostrud reprehenderit ea ullamco culpa
                        eiusmod. Commodo veniam in cupidatat Lorem ad. Consectetur aute
                        cillum commodo do nostrud occaecat fugiat cillum proident
                        incididunt officia est. Do consectetur ipsum ea laborum sunt
                        minim labore consectetur enim fugiat nulla tempor cupidatat. Non
                        qui exercitation fugiat tempor non in. Amet id dolor ad eu
                        cupidatat et nostrud reprehenderit ea ullamco culpa eiusmod.
                        Commodo veniam in cupidatat Lorem ad.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
