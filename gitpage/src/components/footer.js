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
import URL from '@mui/material/Link';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'//import theme (to config some style) 
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Footer() {

    return (
        <Grid container sx={{ justifyContent: 'center', mt: '200px' }}>
            <Divider style={{ width: '100%' }} />
            <Grid sx={{ width: '50vw' }} xs={12} container className="text-center footerSection">

                <Grid lg={3} md={6} sm={12} className="p-5 text-justify">

                    <h1 className="serviceName">Follow Me</h1>
                    <URL href="#">
                        <FacebookIcon /> Facebook
                    </URL>
                    <br />
                    <URL href="#">
                        <YouTubeIcon /> YouTube
                    </URL>
                    <br />
                    <URL href="#">
                        <GitHubIcon /> GitHub
                    </URL>
                </Grid>
                <Grid lg={3} md={6} sm={12} className="p-5 text-justify">
                    <h1 className="serviceName">Address</h1>
                    <p className="serviceDescription">
                        XXXX, Kwai Chung, <br />Hong Kong
                    </p>
                    <p className="serviceDescription">
                        {" "}
                        <EmailIcon /> felix99923@gmail.com
                    </p>
                    <p className="serviceDescription">
                        {" "}
                        <LocalPhoneIcon /> +852 9342 8421
                    </p>
                </Grid>
                <Grid lg={3} md={6} sm={12} className="p-5 text-justify">
                    <h1 className="serviceName">Information</h1>
                    <Link to="/about" className="footerLink">
                        About Me
                    </Link>
                    <br />
                    <a className="footerLink" href="#">
                        My Resume
                    </a>
                    <br />
                    <Link to="/contact" className="footerLink">
                        Contact Me
                    </Link>
                </Grid>
                <Grid lg={3} md={6} sm={12} className="p-5 text-justify">
                    <h1 className="serviceName">Legal</h1>
                    {/* <Link to="/refund" className="footerLink">
                        Refund Policy
                    </Link>
                    <br /> */}
                    <Link to="/terms" className="footerLink">
                        Terms and Condition
                    </Link>
                    <br />
                    <Link to="/privacy" className="footerLink">
                        Privacy Policy
                    </Link>
                </Grid>
            </Grid>

            <Grid xs={12} sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', background: '#30334f', width: '100vw', height: '150px', mt: '100px' }} className="text-center copyrightSection">
                <Grid xs={12}>
                    <URL underline='hover' sx={{ color: "#ffffff" }} href="http://vicioususcyclest.github.io/" >
                        vicioususcyclest.github.io/ &copy; 2023
                    </URL>
                </Grid>
            </Grid>

        </Grid>
    )
}