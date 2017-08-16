import {css} from 'glamor';

export default css({

    '& .header': {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
        paddingLeft: 15,
        '@media(max-width: 768px)': {
            paddingTop: 10
        },
    },
    '& .galerie': {
        paddingLeft: '5vw',
        paddingRight: '5vw'
    },
    '& .results': {
        backgroundImage: `url(/media/trail.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundAttachment: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 60,
        paddingBottom: 60,
        '@media (max-width: 768px)': {
            paddingTop: '50vh',
            paddingBottom: '50vh',
        }
    },
    '& .year-result': {
        marginBottom: 60
    },
    '& .results-list-wrapper': {
        backgroundColor: 'whitesmoke !important',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30,
        paddingBottom: 30,
        marginTop: 30,
        marginBottom: 30
    },
    '& .result-item': {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'space-between',
        alignItem: 'center',
        '& .secondary-content': {
            textAlign: 'right'
        }
    }
});