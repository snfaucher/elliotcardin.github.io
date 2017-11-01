import {css} from 'glamor';

export default css({
    '& .header': {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
        paddingLeft: 15,
        '@media(max-width: 768px)': {
            paddingTop: 10
        },
    },
    '& .home': {
        height: '100vh',
        backgroundSize: 'cover',
        color: 'whitesmoke',
        '@media(max-width: 768px)': {
            backgroundImage: `url(/media/running-wood-mobile.jpg)`,
            backgroundPosition: '-80%'
        },
        '& .caption': {
            position: 'relative',
            top: '40%',
            textAlign: 'center',
            color: 'white !important',
            '& h1, h3': {
                color: 'white !important',
                marginTop: 0
            }
        }
    },
    '& .home__footer': {
        textAlign: 'center',
    },
    '& a': {
        color: 'white'
    }

});