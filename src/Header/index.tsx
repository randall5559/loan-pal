import React from 'react';
import { AppBar, Box, Button, Hidden, Toolbar } from '@material-ui/core';
import { ReactComponent as Logo } from '../logo.svg';
import { Link } from "react-router-dom";
import { useStyles } from './styles';

function Header() {
  const classes = useStyles();

  return <div>
    <Hidden only={['sm', 'xs']}>
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Box width={150} height={25}>
                <Link to="/"><Logo /></Link>
                </Box>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </Hidden>
    <Hidden only={['lg', 'md']}>
        <AppBar className={classes.appbarMobile} position="static">
            <Toolbar className={classes.toolbarMobile}>
                <Box width={150} height={25}>
                    <Link to="/"><Logo /></Link>
                </Box>
                <Button className={classes.button} color="inherit">Login</Button>
            </Toolbar>
      </AppBar>
    </Hidden>
  </div>
}

export default Header;