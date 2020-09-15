import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
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
        flexWrap: 'wrap'
    },
    logo: {
        margin: 'auto'
    },
    button: {
        position: 'absolute',
        right: 10
    }
}));