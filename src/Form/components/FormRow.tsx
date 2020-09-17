import { Box, Button, Fade, Paper, Popper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import MaskedInput from 'react-text-mask';
import { User } from '../../shared/interfaces/user.interface';

/**
 * FormRow sub component for Form
 *
 * @param {*} props
 * @return {*} 
 */
const FormRow = (props: any): any => {
    const { id, classes, isMobile, user, actives, setActives, handleFieldChange } = props;
    const flexDirection = isMobile ? 'column' : 'row';
    const emailExr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    switch(id) {
        case 'first-last-name':
            return  <Box display="flex" flexDirection={flexDirection}>
                        <TextField required id="first-name" label="First Name" variant="outlined" onChange={handleFieldChange('firstName')} 
                            error={ user.hasOwnProperty('firstName') && user.firstName.length === 0 ? true : false } 
                        />
                        <TextField required id="last-name" label="Last Name" variant="outlined" onChange={handleFieldChange('lastName')} 
                            error={ user.hasOwnProperty('lastName') && user.lastName.length === 0 ? true : false } 
                            onClick={() => setActives({ ...actives, lastName: true })}
                        />
                    </Box>

        case 'email':
            return  <Box display="flex" flexDirection={flexDirection}>
                        <TextField required type="email" id="email" label="Email" variant="outlined" onChange={handleFieldChange('email')} 
                            error={ user.hasOwnProperty('email') && !emailExr.test(user.email) ? true : false } 
                        />
                    </Box>

        case 'street':
            return  <Box display="flex" flexDirection={flexDirection}>
                        <TextField required id="street" label="Street (No P.O. Boxes)" variant="outlined" onChange={handleFieldChange('street')} 
                            error={ user.hasOwnProperty('street') && user.street.length === 0 ? true : false } 
                            onClick={() => setActives({ ...actives, street: true })}
                        />
                    </Box>

        case 'city-state-zip':
            const { states } = props;

            return  <Box display="flex" flexDirection={flexDirection}>
                        <TextField required id="city" label="City" variant="outlined" onChange={handleFieldChange('city')} 
                            error={ user.hasOwnProperty('city') && user.city.length === 0 ? true : false } 
                            onClick={() => setActives({ ...actives, city: true })}
                        />
                        <TextField
                            required
                            id="state"
                            select
                            label="State"
                            value={(user as User).state}
                            onChange ={handleFieldChange('state')}
                            SelectProps={{ native: true }}
                            variant="outlined"
                            error={ user.hasOwnProperty('state') && user.state.length === 0 ? true : false } 
                            onClick={() => setActives({ ...actives, state: true })}
                        >
                            {states.map((state: string, index: number) => (
                                <option key={index} value={state}>{state}</option>
                            ))}
                        </TextField>
                        <TextField required id="zip" label="Zip" type="number" variant="outlined" onChange={handleFieldChange('zip')} 
                            error={ user.hasOwnProperty('zip') && user.zip.length === 0 ? true : false } 
                            onClick={() => setActives({ ...actives, zip: true })}
                        />
                    </Box>

        case 'phone-birth-ss':
            return  <Box display="flex" flexDirection={flexDirection}>
                        <TextField
                            required
                            id="phone"
                            label="Phone"
                            InputProps={{
                                inputComponent: TextMaskCustom,
                            }}
                            variant="outlined"
                            onChange={handleFieldChange('phone')}
                            error={ user.hasOwnProperty('phone') && user.phone.length === 0 ? true : false } 
                            onClick={() => setActives({ ...actives, phone: true })}
                        />
                        <TextField
                            required
                            id="birth"
                            label="Date of Birth"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onChange={handleFieldChange('birth')}
                            error={ user.hasOwnProperty('birth') && user.birth.length === 0 ? true : false } 
                            onClick={() => setActives({ ...actives, birth: true })}
                        />
                        <TextField 
                            required
                            id="ss" 
                            label="Last 4 digit of Social Security" 
                            type="text" 
                            variant="outlined"
                            inputProps={{ maxLength: 4 }}
                            onChange={handleFieldChange('socialSecurity')} 
                            error={ user.hasOwnProperty('socialSecurity') && user.socialSecurity.length === 0 ? true : false } 
                            onClick={() => setActives({ ...actives, socialSecurity: true })}
                        />
                    </Box>

        case 'pre-tax-co-borrower':
            return  <Box display="flex" flexDirection={flexDirection}>
                        <TextField required id="pre-tax" label="Pre-Tax Annual Income" variant="outlined" onChange={handleFieldChange('preTax')}   
                            error={ user.hasOwnProperty('preTax') && user.preTax.length === 0 ? true : false } 
                            onClick={() => setActives({ ...actives, preTax: true })}
                        />
                        <Button className={classes.button} variant="contained" disabled={true}>
                            Add Co-Borrower
                        </Button>
                    </Box>

        case 'disclaimer-submit':
            const { setAnchorEl, setOpen, setPlacement, placement, anchorEl, open, createNewUser } = props;

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
                        <Button className={classes.button} variant="contained" 
                            onClick={() => createNewUser(user)}
                            disabled={ !Object.keys(actives).every(key => actives[key]) ? true : false }
                        >
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