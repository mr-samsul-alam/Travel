import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';

const drawerWidth = 240;

function Dashboard(props) {
    const { user, admin } = useAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let navigate = useNavigate()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    console.log(admin);
    const handleRoute = (text) => {

        if (admin === true) { 
            switch (text) {
                case "Home": navigate('/home')
                    break;
                case "Give Review": navigate('/dashboard/giveReview')
                    break;
                case "My Plans": navigate('/dashboard/myPlans')
                    break;
                case "Dashboard": navigate('/dashboard')
                    break;
                case "Make Admin": navigate('/dashboard/makeAdmin')
                    break;
                case "Add Service": navigate('/dashboard/addServices')
                    break;
                default: navigate('/dashboard')
            }
        }
        else { 
            switch (text) {
                case "Home": navigate('/home')
                    break;
                case "Give Review": navigate('/dashboard/giveReview')
                    break;
                case "My Plans": navigate('/dashboard/myPlans')
                    break;
                case "Dashboard": navigate('/dashboard')
                    break;
                default: navigate('/dashboard')
            }

        }

    }

    const drawer = (
        <div>
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mx: "auto", padding: "10px", fontSize: "1.5rem", display: { md: 'flex' } }}

                >
                    <img width={100} style={{ borderRadius: "50%", width: "75%" }} src={user.photoURL} alt="Logo" />
                </Typography></Toolbar>
            <Divider />
            <List>
                {
                    admin ? ['Home', 'DashBoard', "Add Service", "Make Admin", 'Give Review', 'My Plans'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} onClick={() => handleRoute(text)} />
                        </ListItem>
                    ))
                        :
                        ['Home', 'DashBoard', 'Give Review', 'My Plans'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} onClick={() => handleRoute(text)} />
                            </ListItem>
                        ))
                }
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed" style={{ backgroundColor: "white" }}
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar >
                    <IconButton
                        color="secondary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ mx: "auto", color: "black", fontWeight: "700" }} >
                        {
                            admin ? "welcom mr ADmin" : "welcom user"
                        }
                        <img width={100} style={{ margin: "5px" }} src="http://ingenioushubs.com/Travel/demo/images/header-logo.png" alt="Logo" />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', color: "green", sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: "500px" },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}

            >
                <Toolbar />
                <Outlet></Outlet>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;

