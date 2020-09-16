import React from 'react';
import { Box, FormControl, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { useStyles, StyledTableCell, StyledTableRow } from './styles';
import { useSearchFacade } from './hooks';

function createData(name: any, calories: any, fat: any, carbs: any, protein: any) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
];

const Search = () => {
    const classes = useStyles();
    const [
        page, 
        rowsPerPage, 
        setPage,
        setRowsPerPage] = useSearchFacade();

    const paginationElement = () => (
        <TablePagination
            className={classes.tablePagination}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={(event: any, newPage: any) => {
                setPage(newPage);
            }}
            onChangeRowsPerPage={(event: any) => {
                setRowsPerPage(parseInt(event.target.value, 10));
                setPage(0);
            }}
        />
    )

    return (
        <Box display="flex" justifyContent="center" flexDirection="column" marginTop={3}>
            <form className={classes.root} noValidate>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
                    <OutlinedInput
                        id="search-text"
                        type="text"
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton className={classes.iconButton} aria-label="search">
                                <SearchIcon fontSize="large" />
                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
            </form>

            {paginationElement()}
            <TableContainer>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                        <StyledTableCell align="right">Calories</StyledTableCell>
                        <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th">{row.name}</StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {paginationElement()}
        </Box>
    );
}

export default Search;
