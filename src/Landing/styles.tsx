import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
    rootModal: {
        '& .MuiDialogTitle-root': {
            padding: '10px 18px'
        },
        '& label': {
            color: 'gray'
        },
        '& label.Mui-focused': {
            color: '#128A98'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#128A98',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'gray',
            },
            '& input': {
                color: 'gray'
            },
            '&.Mui-focused input': {
                color: '#128A98'
            },
            '&:hover fieldset': {
                borderColor: '#128A98',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#128A98',
            },
        }
    },
    modalButton: {
        backgroundColor: '#B0B0B0',
        '&:hover': {
            backgroundColor: '#128A98',
        }
    },
    modalLinkCancel: {
        color: '#B0B0B0'
    },
    modalLink: {
        color: '#128A98'
    },
    button: {
        backgroundColor: '#128A98',
        margin: '10px 0',
        padding: 15,
        minWidth: 300,
        maxWidth: 350
    },
    link: {
        textDecoration: 'none',
        alignSelf: 'center'
    }
}));