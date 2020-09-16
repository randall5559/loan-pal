import { Box, Button, Fade, Paper, Popper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import MaskedInput from 'react-text-mask';

/**
 * FormRow sub component for Form
 *
 * @param {*} props
 * @return {*} 
 */
const FormRow = (props: any): any => {
    const { id, classes, isMobile } = props;
    const flexDirection = isMobile ? 'column' : 'row';
    
    switch(id) {
        case 'first-last-name':
            return  <Box display="flex" flexDirection={flexDirection}>
                        <TextField id="first-name" label="First Name" variant="outlined" />
                        <TextField id="last-name" label="Last Name" variant="outlined" />
                    </Box>

        case 'street':
            return  <Box display="flex" flexDirection={flexDirection}>
                        <TextField id="street" label="Street (No P.O. Boxes)" variant="outlined" />
                    </Box>

        case 'city-state-zip':
            const { selectedState, setSelectedState, states } = props;

            return  <Box display="flex" flexDirection={flexDirection}>
                        <TextField id="city" label="City" variant="outlined" />
                        <TextField
                            id="state"
                            select
                            label="State"
                            value={selectedState}
                            onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                                setSelectedState(event.target.value);
                            }}
                            SelectProps={{ native: true }}
                            variant="outlined"
                        >
                            {states.map((state: string, index: number) => (
                                <option key={index} value={state}>{state}</option>
                            ))}
                        </TextField>
                        <TextField id="zip" label="Zip" type="number" variant="outlined" />
                    </Box>

        case 'phone-birth-ss':
            const { socialSecurity, setSelectedDate, setSocialSecurity } = props;

            return  <Box display="flex" flexDirection={flexDirection}>
                        <TextField
                        id="phone"
                        label="Phone"
                        InputProps={{
                            inputComponent: TextMaskCustom,
                        }}
                        variant="outlined"
                        />
                        <TextField
                            id="date"
                            label="Date of Birth"
                            type="date"
                            onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                                setSelectedDate(event.target.value);
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <TextField 
                            id="ss" 
                            label="Last 4 digit of Social Security" 
                            type="number" 
                            variant="outlined" 
                            value={socialSecurity} 
                            onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                                const val = (event.target.value).toString();
                                const trimmedVal = val.length > 4 ? val.slice(0, 4) : val; 
                                setSocialSecurity(trimmedVal);
                            }} 
                        />
                    </Box>

        case 'pre-tax-co-borrower':
            return  <Box display="flex" flexDirection={flexDirection}>
                        <TextField id="pre-tax" label="Pre-Tax Annual Income" variant="outlined" />
                        <Button className={classes.button} variant="contained">
                            Add Co-Borrower
                        </Button>
                    </Box>

        case 'disclaimer-submit':
            const { setAnchorEl, setOpen, setPlacement, placement, anchorEl, open } = props;

            return  <Box display="flex" flexDirection="column">
                        <Button onClick={(event: any) => {
                            setAnchorEl(event.currentTarget);
                            setOpen(!open);
                            setPlacement('bottom');
                        }}>
                            <Box color="white" margin={2} padding={0} style={{ textDecoration: 'underline' }}>View Disclaimer</Box>
                        </Button>
                        <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                            {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper>
                                    <Typography className={classes.typography}>All loans are subject to local laws and regulations.</Typography>
                                </Paper>
                            </Fade>
                            )}
                        </Popper>
                        <Button className={classes.button} variant="contained">
                            Submit Application
                        </Button>
                    </Box>
    }

    return <Box></Box>;
}

/**
 * Add a text mask for phone number row
 *
 * @param {*} props
 * @return {*} 
 */
function TextMaskCustom(props: any) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
}

export default FormRow;