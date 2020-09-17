import React, { useState } from 'react';
import { guid } from '@datorama/akita';
import firebase from 'firebase';

import { usersService } from '../shared/state';
import { User } from '../shared/interfaces/user.interface';

type HookProps = [
    HTMLElement | null | undefined,
    boolean,
    "bottom" | "left" | "right" | "top" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start" | undefined,
    User,
    boolean,
    any,
    boolean,
    boolean,
    Function,
    Function,                                         
    Function,
    Function,
    Function,
    Function,
    Function,
    Function
];

export function useFormFacade(): HookProps {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] =useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [openBackDrop, setOpenBackDrop] = useState(false);
    const [placement, setPlacement] = useState();
    const [active, setActive] = useState();
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [actives, setActives] = useState({
        firstName: false,
        lastName: false,
        email: false,
        street: false,
        city: false,
        state: false,
        zip: false,
        phone: true,
        birth: false,
        socialSecurity: false, 
        preTax: false
    });

    const handleFieldChange = (field: string) => (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (field === 'socialSecurity') {
            const val = (event.target.value).toString();
            const trimmedVal = val.length > 4 ? val.slice(0, 4) : val; 
            setUser({ ...user, [field]: trimmedVal });
        } 
        else {
            setUser({ ...user, [field]: event.target.value });
        }

        const emailExr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (field === 'email' && emailExr.test(event.target.value)) {
            setActives({ ...actives, [field]: true });
        } else {
            setActives({ ...actives, [field]: true });
        }

        console.log(actives);
    };

    const createNewUser = () => {
        const id = guid();
        const errors = Object.keys(user).filter((key: string) =>  !user[key as never]);
        const missingKeys = [ 
            'firstName',
            'lastName',
            'email',
            'street',
            'city',
            'state',
            'zip',
            'phone',
            'birth',
            'socialSecurity', 
            'preTax'
        ].filter(key => !user.hasOwnProperty(key));

        const hasErrors = errors.length || missingKeys.length ? true : false;
        
        setError(hasErrors);
        setOpenSnackBar(true);

        if (!hasErrors) {
            setOpenBackDrop(true);
            setActive (
                usersService.addNewUser({ id, status: 'processing', ...(user as User) })
            );
            setTimeout(() => {
                window.location.href = '/';
            }, 3000);

            firebase.auth()
                .createUserWithEmailAndPassword((user as User).email as string, '2Loanpal4')
                .then((res) => {
                    const currentUser = firebase.auth().currentUser;

                    currentUser?.sendEmailVerification().then(function() {
                        // Email sent.
                    }).catch(function(error) {
                        // An error happened.
                    });
                })
                .catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log('ERRORS:', errorCode, errorMessage);
                });
        }
    }

    return [
        anchorEl,
        open,
        placement,
        user as User, 
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
        setOpenSnackBar,
        handleFieldChange
    ];
}