import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';

const Landing = () => {
    const classes = useStyles();
   
    return (
        <Box display="flex" justifyContent="center" flexDirection="column" marginTop={6}>
            <Box color="white" textAlign="center" marginBottom={6} padding={2}>
                <Typography variant="h4">
                    APPLY NOW GET APPROVED IN SECONDS!
                </Typography>
            </Box>
            <Link className={classes.link} to="/status">
                <Button className={classes.button} variant="contained">
                    Check Status
                </Button>
            </Link>
            <Link className={classes.link} to="/form">
                <Button className={classes.button} variant="contained">
                    Apply
                </Button>
            </Link>
        </Box>
    );
}

export default Landing;