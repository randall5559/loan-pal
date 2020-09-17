import React, { useState } from 'react';
import { guid } from '@datorama/akita';

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
        street: false,
        city: false,
        state: false,
        zip: false,
        phone: false,
        birth: false,
        socialSecurity: false, 
        preTax: false
    });

    const createNewUser = () => {
        const id = guid();
        const errors = Object.keys(user).filter((key: string) =>  !user[key as never]);
        const missingKeys = [ 
            'firstName',
            'lastName',
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

        console.log('USER:', { id, status: 'processing', ...(user as User) });

        if (!hasErrors) {
            setOpenBackDrop(true);
            setActive (
                usersService.addNewUser({ id, status: 'processing', ...(user as User) })
            );
            setTimeout(() => {
                window.location.href = '/';
            }, 3000);
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
        setOpenSnackBar
    ];
}