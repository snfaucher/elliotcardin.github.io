import {css} from 'glamor';

const height = 300;
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
        display: 'flex',
        alignItems: 'center',
        padding: '15px'
    },
    '& .title': {
        fontSize: '2em',
        '> a': {
            color: 'black'
        },
        '> a:hover': {
            textDecoration: 'underline'
        }
    },
    '& .publisher': {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px',
    }
});
