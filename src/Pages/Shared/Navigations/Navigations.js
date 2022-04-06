import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';

const pages = ['Home', 'Packages', 'About'];



const Navigations = () => {
    const { user, logout } = useAuth()
    let navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const handleNavClicked = (page) => {
        switch (page) {
            case "Home": navigate('/home')
                break;
            case "Packages": navigate('/packages')
                break;
            case "About": navigate('/about')
                break;
            default: navigate('/home')
        }


    }
    const handleLogOut = () => {
        logout()
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{ backgroundColor: "white" }} >
                <Container maxWidth="xl" >
                    <Toolbar disableGutters >
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, fontSize: "1.5rem", display: { xs: 'none', md: 'flex' } }}

                        >
                            <img width={100} src="http://ingenioushubs.com/Travel/demo/images/header-logo.png" alt="Logo" />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="primary"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" style={{ fontWeight: "700", color: '#236F97B3', }} onClick={() => handleNavClicked(page)}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <img width={100} style={{ padding: '5px' }} src="http://ingenioushubs.com/Travel/demo/images/header-logo.png" alt="Logo" />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#236F97B3', display: 'block' }}
                                >
                                    <Typography style={{ fontWeight: "700", }} onClick={() => handleNavClicked(page)}>
                                        {page}
                                    </Typography>
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            {
                                user.email ? <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        alignItems: "center"
                                    }}
                                >
                                    <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: '100px', color: "#236F97B3", fontWeight: "700" }}  >{user.displayName}</Box>
                                    <img src={user.photoURL} style={{ borderRadius: "50%", width: "15%" }} alt="" />
                                    <Button
                                        style={{
                                            textDecoration: 'none',
                                            color: '#236F97B3',
                                            fontWeight: "700",
                                        }}
                                        onClick={handleLogOut}
                                    >Logout </Button>
                                </div> : <NavLink style={{
                                    textDecoration: 'none',
                                    color: '#236F97B3',
                                    fontWeight: "700",
                                }}
                                    to="/signIn" ><Button color="inherit"  >Login</Button></NavLink>
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Navigations;