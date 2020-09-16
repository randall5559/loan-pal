import React, { useState } from 'react';

type HookProps = [
    number,
    number,
    Function,                               
    Function
];

/**
 * Search hook facade
 *
 * @export
 * @return {*}  {HookProps}
 */
export function useSearchFacade(): HookProps {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    return [
        page, 
        rowsPerPage, 
        setPage,
        setRowsPerPage
    ];
}