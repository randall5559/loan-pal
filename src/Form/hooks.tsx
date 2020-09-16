import React, { useState } from 'react';

type HookProps = [
    HTMLElement | null | undefined,
    boolean,
    "bottom" | "left" | "right" | "top" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start" | undefined,
    string,
    string | null,
    Function,
    Function,
    Function,
    Function,
    Function,                                         
    Function
];

export function useFormFacade(): HookProps {
    const [selectedState, setSelectedState] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [socialSecurity, setSocialSecurity] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] =useState(false);
    const [placement, setPlacement] = useState();

    return [
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
    ];
}