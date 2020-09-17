import React, { useState, useEffect } from 'react';
import { User } from '../shared/interfaces/user.interface';
import { usersQuery } from '../shared/state';

type HookProps = [
    { data: User[], columns: any },
    Function
];

/**
 * Search hook facade
 *
 * @export
 * @return {*}  {HookProps}
 */
export function useSearchFacade(): HookProps {
    const [state, setState] = useState({ columns: [] as any, data: [] as User[] });

    const getUsers = async() => {
        const snapshot = await usersQuery.getAllUsers();
        const dbData = [] as User[];

        snapshot.forEach((childSnapshot: any) => {
            // var childKey = childSnapshot.key;
            // var childData = childSnapshot.val();
            dbData.push(childSnapshot.val() as User)
        });

        setState({
            columns: [
                { title: 'First Name', field: 'firstName' },
                { title: 'Last Name', field: 'lastName' },
                { title: 'Street', field: 'street' },
                { title: 'City', field: 'city' },
                { title: 'State', field: 'state' },
                { title: 'Zip', field: 'zip' },
                { title: 'Phone', field: 'phone' },
                { title: 'Birth', field: 'birth' },
                { title: 'Social Security', field: 'socialSecurity' },
                { title: 'Pre-Tax', field: 'preTax' },
                { title: 'Status', field: 'status' }
            ],
            data: dbData
        })

        console.log('User:', dbData);
    }

    useEffect(() => {
        getUsers();
    }, []);


    return [
        state,
        setState
    ];
}