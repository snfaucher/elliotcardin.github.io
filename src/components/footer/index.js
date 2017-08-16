import React, { Component } from 'react';
import styles from './styles';

class Footer extends Component {
    render() {
        const year = new Date().getFullYear();
        return (
            <div className="footer" {...styles}>
                Copyright © {year} Elliot Cardin
            </div>
        );
    }
}

export default Footer;
