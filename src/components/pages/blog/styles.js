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
        paddingTop: '10vh',
        backgroundColor: 'whitesmoke',
        '& .blogCover': {
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            marginBottom: 60,
            height: '40vh',
            display: 'flex',
            alignItems: 'flex-end',
            '& .caption': {
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.7)',
                width: '100%',
                padding: 5,
                fontSize: '2em',
                justifyContent: 'center'
            }
        }
    }
});
