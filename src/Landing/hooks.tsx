import React, { useState } from 'react';

type HookProps = [
    boolean,
    Function
];

/**
 * Search hook facade
 *
 * @export
 * @return {*}  {HookProps}
 */
export function useSearchFacade(): HookProps {
    const [open, setOpen] = useState(false);

    return [
        open,
        setOpen
    ]
}