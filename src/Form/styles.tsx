import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        padding: '10px 50px',
        '& .MuiTextField-root': {
            flex: 1,
            margin: '30px 15px',
            minWidth: 200
        },
        '& select': {
            color: 'white'
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
                color: 'white'
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
    rootMobile: {
        padding: '10px 0',
        '& .MuiTextField-root': {
            margin: '15px 30px',
        }
    },
    button: {
        backgroundColor: '#128A98',
        padding: 15,
        minWidth: 300,
        width: 'auto',
        marginRight: 15,
        marginLeft: 15,
        textDecoration: 'none',
        alignSelf: 'center',
        '&.Mui-disabled': {
            backgroundColor: 'gray',
            opacity: 0.4
        }
    },
    disclaimerText: {
        color: 'white',
        margin: '10px 0'
    },
    typography: {
        padding: theme.spacing(4),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}));