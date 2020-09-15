import React from 'react';
import { AppBar, Box, Button, Hidden, Toolbar, Typography } from '@material-ui/core';
import { ReactComponent as Logo } from '../logo.svg';
import { useStyles } from './styles';

function Header() {
  const classes = useStyles();

  return <AppBar position="static">
    <Hidden only={['sm', 'xs']}>
      <Toolbar className={classes.toolbar}>
        <Box width={150} height={25}>
          <Logo />
        </Box>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </Hidden>
    <Hidden only={['lg', 'md']}>
      <Toolbar className={classes.toolbarMobile}>
          <Box width={150} height={25}>
            <Logo />
          </Box>
          <Button className={classes.button} color="inherit">Login</Button>
      </Toolbar>
    </Hidden>
  </AppBar>
}

export default Header;