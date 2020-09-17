import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
    appbarMobile: {
        flexDirection: 'row'
    },
    toolbar: {
        display: 'flex',
        backgroundColor: '#128A98',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    toolbarMobile: {
        display: 'flex',
        backgroundColor: '#128A98',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%'
    },
    logo: {
        margin: 'auto'
    },
    button: {
        position: 'absolute',
        right: 10
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
        textDecoration: 'none',
        color: '#128A98'
    }
}));