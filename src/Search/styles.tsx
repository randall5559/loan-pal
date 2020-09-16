import { makeStyles, TableCell, TableRow, Theme, withStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        '& .MuiFormControl-root': {
            width: '97%',
            margin: 'auto'
        },
        '& .MuiTextField-root': {
            flex: 1,
            margin: '30px 15px',
            minWidth: 200
        },
        '& label': {
            color: 'gray'
        },
        '& label.Mui-focused': {
            color: 'white'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'gray',
            },
            '& input': {
                color: 'gray'
            },
            '&.Mui-focused input': {
                color: 'white'
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        }
    },
    iconButton: {
        color: 'gray',
        '&:hover': {
            color: 'white'
        }
    },
    table: {
        minWidth: 700,
        padding: 10
    },
    tablePagination: {
        color: 'white',
        '& .MuiSvgIcon-root': {
            color: 'white'
        }
    }
}));

export const StyledTableCell = withStyles((theme) => ({
    head: {
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        color: theme.palette.common.white
    },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:hover': {
            backgroundColor: '#202020'
        }
    }
}))(TableRow);