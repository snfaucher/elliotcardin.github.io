import {css} from 'glamor';

const height = '40vh';
export default css({
    backgroundColor: 'whitesmoke',
    minHeight: height,
    marginBottom: 30,
    '& .cover': {
        height,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    },
    '& .content': {
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
