import React from 'react';
import { AppBar, Box, Button, Hidden, Toolbar } from '@material-ui/core';
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../logo.svg';
import { useStyles } from './styles';
import { useHeaderFacade } from './hooks';
import Modal from './components/Modal';
 
const Header = () => {
    const classes = useStyles();
    const [
        open,
        setOpen
    ] = useHeaderFacade();

    return <div>
        <Hidden only={['sm', 'xs']}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Box width={150} height={25}>
                        <Link to="/"><Logo /></Link>
                    </Box>
                    <Button color="inherit" onClick={() => setOpen(true)}>Login</Button>
                </Toolbar>
            </AppBar>
        </Hidden>
        <Hidden only={['lg', 'md']}>
            <AppBar className={classes.appbarMobile} position="static">
                <Toolbar className={classes.toolbarMobile}>
                    <Box width={150} height={25}>
                        <Link to="/"><Logo /></Link>
                    </Box>
                    <Button className={classes.button} color="inherit" onClick={() => setOpen(true)}>Login</Button>
                </Toolbar>
        </AppBar>
        </Hidden>
        <Modal classes={classes} open={open} setOpen={setOpen}  />
    </div>
}

export default Header;