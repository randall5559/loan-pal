import React from 'react';
import { Backdrop, Box, CircularProgress, Hidden, Typography } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { useStyles } from './styles';
import { useFormFacade } from './hooks';
import { STATES } from '../shared/constants/states.constant';
import FormRow from './components/FormRow';

const Form = () => {
    const classes = useStyles();
    const [
        anchorEl,
        open,
        placement,
        user, 
        error,
        actives,
        openSnackBar,
        openBackDrop,  
        setAnchorEl,
        setOpen,
        setPlacement,
        createNewUser,
        setUser,
        setActives,
        setOpenSnackBar
    ] = useFormFacade();

    
    // returns a mobile or web base layout
    const formRows = (isMobile: boolean)=> (
        <form className={ isMobile ? `${classes.root} ${classes.rootMobile}` : classes.root } noValidate>
            <FormRow id="first-last-name" error={error} actives={actives}  isMobile={isMobile} user={user} setUser={setUser} setActives={setActives} />
            <FormRow id="street" error={error} actives={actives} isMobile={isMobile} user={user} setUser={setUser} setActives={setActives} />
            <FormRow id="city-state-zip" error={error} actives={actives} states={STATES} isMobile={isMobile} user={user} setUser={setUser}setActives={setActives}  />
            <FormRow id="phone-birth-ss" error={error} actives={actives} isMobile={isMobile} user={user} setUser={setUser} setActives={setActives} />
            <FormRow id="pre-tax-co-borrower" error={error} actives={actives} classes={classes} isMobile={isMobile} user={user} setUser={setUser} setActives={setActives} />
            <FormRow id="disclaimer-submit"  
                classes={classes} setAnchorEl={setAnchorEl} setOpen={setOpen} setPlacement={setPlacement} user={user} setUser={setUser}
                anchorEl={anchorEl} open={open} placement={placement} isMobile={isMobile} createNewUser={createNewUser} actives={actives}
            />
        </form>
    )

    return (
        <Box textAlign="center" color="white" marginTop={3} marginBottom={3}>
            <Typography variant="h6" component="h3">YOUR MINUTES AWAY FROM A POSSIBLE APPROVAL!</Typography>
            <Hidden only={['sm', 'xs']}>{formRows(false)}</Hidden>
            <Hidden only={['lg', 'md']}>{formRows(true)}</Hidden>
            <Snackbar 
                open={openSnackBar} 
                autoHideDuration={6000} 
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
                onClose={() => {
                    setOpenSnackBar(false);
                }}
            >
                <Validate error={error} />
            </Snackbar>
            <Backdrop className={classes.backdrop} open={openBackDrop}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
    );
}

export default Form;

function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Validate({ error }: any) {
    return error ? 
        <Alert severity="warning">
            Please correct all highlighted errors!
        </Alert>
    
    :   <Alert severity="success">
            Your Loan Application has been submitted successfully! Check your email for further details.
        </Alert>

}
