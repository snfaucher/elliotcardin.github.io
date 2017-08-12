import {css} from 'glamor';

export default css({
    width: '100%',
    fontSize: '1.2em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .brand': {
        color: 'whitesmoke',
        fontSize: '1.2em'
    },
    '& .dark.brand': {
        color: 'black',
        fontSize: '1.4em'
    },
    '.brand-wrapper': {
        paddingLeft: '16px !important'
    },
    '& .dark.link-caption': {
        color: 'black'
    },
    '& .link-caption': {
        color: 'whitesmoke'
    },
    '& .menu': {
        borderBottomColor: 'rgba(0,0,0,0)',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    '& .menu-mobile': {
        height: '100vh',
        minHeight: '100vh',
        '& .link-caption': {
            fontSize: '1.3em !important'
        }
    },
    '.close-wrapper': {
        color: 'gray',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    '& .transparent': {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 100,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
        borderBottomColor: 'rgba(0,0,0,0)',
    }
});