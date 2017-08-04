import {css} from 'glamor';
import  backgroundImage from '../img/running-wood.jpg';
import  backgroundImageMobile from '../img/running-wood-mobile.jpg';

export default css({
    '& .header' : {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    '.home': {
        height: '100vh',
        backgroundSize: 'cover',
        color: 'whitesmoke',
        backgroundImage: `url("${backgroundImage}")`,
        '@media(max-width: 768px)': {
            backgroundImage: `url("${backgroundImageMobile}")`,
        }

    },
    '& .home__caption': {
        position: 'relative',
        top: '40%',
        textAlign: 'center',
        '& h1': {
            marginTop: 0
        }
    },
    '& .home__footer': {
        position: 'absolute',
        bottom: '5%',
        textAlign: 'center',
        width: '100%'
    },
    '& a': {
        color : 'white',
        fontSize : '0.8em'
    }

});