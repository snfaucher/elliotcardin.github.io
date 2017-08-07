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
        paddingLeft: '15vw',
        paddingRight: '15vw'
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
        paddingBottom: 15
    }
});
