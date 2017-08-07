import {css} from 'glamor';

export default css({
    width: '100%',
    fontSize: '1.2em',
    display: 'flex',
    justifyContent: 'space-between',
    alignsItems: 'center',
    '& .brand': {
        color: 'whitesmoke',
        fontSize: '1.2em'
    },
    '& .dark.brand': {
        fontSize: '1.2em',
        color: 'black'
    },
    '& .dark.link-caption': {
        color: 'black',
    },
    '& .link-caption': {
        color: 'whitesmoke',
    },
    '& .menu': {
        borderBottomColor: 'rgba(0,0,0,0)',
        backgroundColor: 'rgba(0,0,0,0)',
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