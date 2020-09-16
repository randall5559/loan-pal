import React from 'react';
import { Box, Hidden, Typography } from '@material-ui/core';

import { useStyles } from './styles';
import { useFormFacade } from './hooks';
import { STATES } from '../shared/constants/states.constant';
import FormRow from './components/FormRow';


const Landing = () => {
    const classes = useStyles();
    const [
        anchorEl,
        open,
        placement,
        selectedState,
        socialSecurity, 
        setSocialSecurity,
        setSelectedState,
        setSelectedDate,
        setAnchorEl,
        setOpen,
        setPlacement
    ] = useFormFacade();

    
    // returns a mobile or web base layout
    const formRows = (isMobile: boolean)=> (
        <form className={ isMobile ? `${classes.root} ${classes.rootMobile}` : classes.root } noValidate>
            <FormRow id="first-last-name" isMobile={isMobile} />
            <FormRow id="street" isMobile={isMobile} />
            <FormRow id="city-state-zip" selectedState={selectedState} setSelectedState={setSelectedState} states={STATES} isMobile={isMobile}></FormRow>
            <FormRow id="phone-birth-ss" setSelectedDate={setSelectedDate} socialSecurity={socialSecurity} setSocialSecurity={setSocialSecurity} isMobile={isMobile} />
            <FormRow id="pre-tax-co-borrower" classes={classes} isMobile={isMobile} />
            <FormRow id="disclaimer-submit"  
                classes={classes} setAnchorEl={setAnchorEl} setOpen={setOpen} setPlacement={setPlacement} 
                anchorEl={anchorEl} open={open} placement={placement} isMobile={isMobile}
            />
        </form>
    )

    return (
        <Box textAlign="center" color="white" marginTop={3} marginBottom={3}>
            <Typography variant="h6" component="h3">YOUR MINUTES AWAY FROM A POSSIBLE APPROVAL!</Typography>
            <Hidden only={['sm', 'xs']}>{formRows(false)}</Hidden>
            <Hidden only={['lg', 'md']}>{formRows(true)}</Hidden>
        </Box>
    );
}

function FormFields() {
    
}

export default Landing;
