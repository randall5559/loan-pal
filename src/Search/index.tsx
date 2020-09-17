import React, { forwardRef } from 'react';
import { Box } from '@material-ui/core';
import MaterialTable from 'material-table';

import { useStyles } from './styles';
import { useSearchFacade } from './hooks';
import { User } from '../shared/interfaces/user.interface';

import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { BorderAllRounded } from '@material-ui/icons';

const tableIcons = {
    Check: forwardRef((props: any, ref: any) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props: any, ref: any) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props: any, ref: any) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props: any, ref: any) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props: any, ref: any) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props: any, ref: any) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props: any, ref: any) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props: any, ref: any) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props: any, ref: any) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props: any, ref: any) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props: any, ref: any) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props: any, ref: any) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props: any, ref: any) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props: any, ref: any) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props: any, ref: any) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props: any, ref: any) => <ViewColumn {...props} ref={ref} />)
};

const SearchList = () => {
    const classes = useStyles();
    const [ state, setState ] = useSearchFacade();

    return (
        <Box padding={1}>
            <MaterialTable
                title=""
                icons={tableIcons as any}
                columns={state.columns as any}
                data={state.data as User[]}
                options={{
                    searchFieldStyle: {
                        border: 'solid thin white',
                        borderRadius: '10px',
                        padding: 5
                    }
                }}
                editable={{
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                        resolve();
                        if (oldData) {
                            setState((prevState: any) => {
                            const data = [...prevState.data];
                            data[data.indexOf(oldData)] = newData;
                            return { ...prevState, data };
                            });
                        }
                        }, 600);
                    }),
                    onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                        resolve();
                        setState((prevState: any) => {
                            const data = [...prevState.data];
                            data.splice(data.indexOf(oldData), 1);
                            return { ...prevState, data };
                        });
                        }, 600);
                    }),
                }}
            />
        </Box>
    );
}

// const SearchList = () => {
//     const classes = useStyles();
//     const [
//         users,
//         page, 
//         rowsPerPage, 
//         setPage,
//         setRowsPerPage] = useSearchFacade();

//     const paginationElement = () => (
//         <TablePagination
//             className={classes.tablePagination}
//             rowsPerPageOptions={[5, 10, 25]}
//             component="div"
//             count={page}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onChangePage={(event: any, newPage: any) => {
//                 setPage(newPage);
//             }}
//             onChangeRowsPerPage={(event: any) => {
//                 setRowsPerPage(parseInt(event.target.value, 10));
//                 setPage(0);
//             }}
//         />
//     )

//     return (
//         <Box display="flex" justifyContent="center" flexDirection="column" marginTop={3}>
//             <form className={classes.root} noValidate>
//                 <FormControl variant="outlined">
//                     <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
//                     <OutlinedInput
//                         id="search-text"
//                         type="text"
//                         endAdornment={
//                         <InputAdornment position="end">
//                             <IconButton className={classes.iconButton} aria-label="search">
//                                 <Search fontSize="large" />
//                             </IconButton>
//                         </InputAdornment>
//                         }
//                         labelWidth={70}
//                     />
//                 </FormControl>
//             </form>

//             {paginationElement()}
//             <TableContainer>
//                 <Table className={classes.table} aria-label="customized table">
//                     <TableHead>
//                     <TableRow>
//                         <StyledTableCell>First Name</StyledTableCell>
//                         <StyledTableCell align="right">Last Name</StyledTableCell>
//                         <StyledTableCell align="right">Street</StyledTableCell>
//                         <StyledTableCell align="right">City</StyledTableCell>
//                         <StyledTableCell align="right">State</StyledTableCell>
//                         <StyledTableCell align="right">Zip</StyledTableCell>
//                         <StyledTableCell align="right">Phone</StyledTableCell>
//                         <StyledTableCell align="right">Birth</StyledTableCell>
//                         <StyledTableCell align="right">Social Security</StyledTableCell>
//                         <StyledTableCell align="right">Pre-Tax</StyledTableCell>
//                         <StyledTableCell align="right">Status</StyledTableCell>
//                     </TableRow>
//                     </TableHead>
//                     <TableBody>
//                     {users.map((user: User) => (
//                         <StyledTableRow key={user.id}>
//                             <StyledTableCell component="th">{user.firstName}</StyledTableCell>
//                             <StyledTableCell align="right">{user.lastName}</StyledTableCell>
//                             <StyledTableCell align="right">{user.street}</StyledTableCell>
//                             <StyledTableCell align="right">{user.city}</StyledTableCell>
//                             <StyledTableCell align="right">{user.state}</StyledTableCell>
//                             <StyledTableCell align="right">{user.zip}</StyledTableCell>
//                             <StyledTableCell align="right">{user.phone}</StyledTableCell>
//                             <StyledTableCell align="right">{user.birth}</StyledTableCell>
//                             <StyledTableCell align="right">{user.socialSecurity}</StyledTableCell>
//                             <StyledTableCell align="right">{user.preTax}</StyledTableCell>
//                             <StyledTableCell align="right">{user.status}</StyledTableCell>
//                         </StyledTableRow>
//                     ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             {paginationElement()}
//         </Box>
//     );
// }

export default SearchList;
