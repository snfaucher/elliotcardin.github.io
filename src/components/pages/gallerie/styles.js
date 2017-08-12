import {css} from 'glamor';

export default css({
    //backgroundColor: '#9E9E9E !important',
    backgroundColor: 'whitesmoke !important',
    '& .header': {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
        paddingLeft: 15,
        '@media(max-width: 768px)': {
            paddingTop: 10
        },
    },
    '& .gallerie': {
        paddingLeft: '5vw',
        paddingRight: '5vw'
    },
    '& .spinner-wrapper': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh'
    }
});
