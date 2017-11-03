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
    '& .page-content': {
        marginTop: 60,
        minHeight: '120vh',
        backgroundColor: 'whitesmoke',
        '& .page-content__title': {
            textAlign: 'center',
            padding: '25px',
            fontSize: '2.7em'
        }
    }
});