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
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from "react-router-dom";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'//import theme (to config some style) 


export default function Topnavigation() {

    const drawerWidth = 200;
    const navItems = ['HOME', 'Services', 'portfolio', 'about', 'contact'];
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const theme = createTheme({
        typography: {
            fontFamily: 'Lilita One',
        },
        palette: {
            header: {
                main: '#30334f',
                contrastText: '#fff',
            },
        },
    });

    //Drawer(Later do)
    const drawer = (
        <Grid onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                FelixWong
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, i) => (
                    <ListItem key={item} disablePadding>
                        <Link to={"/mainpage/" + item.toLowerCase().replaceAll(' ', '')} style={{ textDecoration: 'none' }} key={item}>
                            <ListItemButton sx={{ textAlign: 'center', color: 'black' }} >
                                <ListItemText primary={item} />

                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Grid>
    );

    return (
        <ThemeProvider theme={theme}>
            <Grid >
                <AppBar position="fixed" color='header' component="nav">
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        <Grid container sx={{ alignItems: 'center' }}>
                            <LibraryBooksIcon sx={{ display: { sm: 'none' } }} />
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                &nbsp;FelixWong
                            </Typography>
                        </Grid>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Grid container sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} >
                            <Link to={"/mainpage/"} style={{ textDecoration: 'none' }}>
                                <IconButton
                                    edge="start"
                                    sx={{ mr: 2, color: '#FFF' }}
                                >
                                    <LibraryBooksIcon />
                                    <Typography
                                        variant="h6"
                                        component="div"
                                    >
                                        &nbsp;FelixWong
                                    </Typography>
                                </IconButton>
                            </Link>
                        </Grid>

                        <Grid sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Link to={"/mainpage/" + item.toLowerCase().replaceAll(' ', '')} style={{ textDecoration: 'none' }} key={item}>
                                    <Button sx={{ color: '#fff' }}>
                                        {item}
                                    </Button>
                                </Link>

                            ))}
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        PaperProps={{ sx: { GridSizing: 'border-Grid', width: drawerWidth } }}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile and also SEO.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            //'.MuiDrawer-paper ': { GridSizing: 'border-Grid', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>

                </Grid>
            </Grid>
        </ThemeProvider>
    )
}