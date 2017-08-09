import {css} from 'glamor';

export default css({
    //backgroundColor: '#9E9E9E !important',
    backgroundColor: 'whitesmoke !important',
    '& .header': {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    '& .gallerie': {
        paddingLeft: '5vw',
        paddingRight: '5vw'
    },
    '& .content': {
        paddingLeft: '30vw',
        paddingRight: '30vw',
        '@media(max-width: 768px)': {
            paddingLeft: 5,
            paddingRight: 5,
        },
        display: 'flex',
        alignItems: 'center',
        minHeight: '70vh'
    },
    '& .cover': {
        backgroundImage: `url(/media/elliotcardin.jpg)`,
        backgroundSize: 'cover',
        height: '50vh'
    },
    '& .description': {
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        lineHeight: '2em'
    }
});
