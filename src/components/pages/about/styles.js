import {css} from 'glamor';

export default css({
    backgroundColor: 'whitesmoke !important',
    '& .header': {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
        paddingLeft: 15,
        '@media(max-width: 768px)': {
            paddingTop: 10
        }
    },
    '& .galerie': {
        paddingLeft: '5vw',
        paddingRight: '5vw'
    },
    '& .content': {
        backgroundImage: `url(/media/background-moutain.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        paddingTop: 60,
        paddingBottom: 240,
        paddingLeft: '30vw',
        paddingRight: '30vw',
        '@media(max-width: 768px)': {
            backgroundPosition: 'center center',
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: '100vh'
        },
        minHeight: '70vh'
    },
    '& .cover': {
        backgroundImage: `url(/media/elliotcardin.jpg)`,
        backgroundSize: 'cover',
        height: '50vh',
        '@media(max-width: 768px) and (orientation:landscape)': {
            height: '100vh'
        }
    },
    '& .description': {
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        lineHeight: '2em',
        textAlign: 'justify'
    },
    '& .sponsors-wrapper': {
        marginTop: 30 * 6,
        '& .list': {
            display: 'flex',
            alignItems  : 'center',
            flexDirection : 'column',
            '& .item': {
                display: 'flex',
                alignItems  : 'center',
                flexDirection : 'column',
                maxWidth : 200,
                marginTop : 50,
                '& .caption': {
                    fontSize: '1.5em',
                    paddingTop : 15
                },
                '& img': {
                    width: '100%',
                    height: 'auto'
                }
            }
        }

    }
});
