import {css} from 'glamor';

export default css({
    width: '100vw',
    '& .link-caption': {
        color: 'whitesmoke',
    },
    '& a': {
        color: 'whitesmoke',
        ":hover": {
            color: 'whitesmoke'
        }
    },
    '& .menu': {
        borderBottomColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        backgroundColor: 'rgba(1,1,1,0.1)',
        display : 'flex',
        justifyContent : 'flex-end',
        color: 'white !important'
    },
    '& .menu-mobile': {
        '& .link-caption': {
            fontSize: '1.3em !important'
        }
    },
    '& .menu-close': {
        color: 'whitesmoke'
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