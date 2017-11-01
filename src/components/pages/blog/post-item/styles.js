import {css} from 'glamor';

const height = 100;
export default css({
    backgroundColor: 'whitesmoke',
    height,
    minHeight: height,
    marginBottom: 30,
    '& .cover': {
        height,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    },
    '& .content': {
        height,
        display: 'flex',
        alignItems: 'center',
        padding: '15px'
    },
    '& .title': {
        fontSize: '1.5em',
        '> a': {
            color: 'black'
        },
        '> a:hover': {
            textDecoration: 'underline'
        }
    }
});
