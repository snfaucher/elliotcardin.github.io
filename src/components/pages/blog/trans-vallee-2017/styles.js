import {css} from 'glamor';

export default css({
    '& .header': {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
        paddingLeft: 15,
        '@media(max-width: 768px)': {
            paddingTop: 10
        }
    },
    '& .jumbotron': {
        height: '80vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    },
    '& .jumbotron.caption': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingLeft: 15,
        paddingRight: 15,
        '& .main': {
            fontSize: '3em',
            '@media(max-width: 768px)': {
                fontSize: '2em'
            }
        },
        '& .results': {
            fontSize: '1.2em',
            marginTop: 30,
            marginBottom: 30
        },
        '& .description': {
            marginTop: 30,
            fontSize: '1.2em',
            textAlign: 'center'
        },
        '& .social': {
            display: 'flex',
            '& >div': {
                marginRight: 15
            }

        }
    },
    '& .story': {
        '& .item-wrapper': {
            marginTop: 30
        },
        '& .item': {
            '& .cover': {
                height: '50vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            },
            '& .content': {
                padding: '15px 15px 15px 15px',
                fontSize: '1.2em'
            }
        }
    }
});
