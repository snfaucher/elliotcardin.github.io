import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import style from './style';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

const MenuItem = Menu.Item;


class MainMenu extends Component {

    componentWillMount() {
        this.setState({
            showMenuMobile: false,
            mobileMenuOpen: false
        });
    }

    renderNonMobile() {
        const captionClass = `link-caption ${this.props.darkTheme ? 'dark' : ''}`;
        const brandClass = `brand ${this.props.darkTheme ? 'dark' : ''}`;
        return (
            <div {...style}>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <div className={brandClass}>
                        Elliot Cardin
                    </div>
                </Link>
                <Menu
                    className={`menu ${this.props.fixed ? 'fixed' : ''}`}
                    mode='horizontal'
                >

                    <MenuItem key="a-propos">
                        <Link to="/a-propos" style={{textDecoration: 'none'}}>
                                    <span className={captionClass}>
                                        À propos
                                    </span>
                        </Link>
                    </MenuItem>
                    <MenuItem key="gallerie">
                        <Link to="/gallerie" style={{textDecoration: 'none'}}>
                                    <span className={captionClass}>
                                        Gallerie
                                    </span>
                        </Link>
                    </MenuItem>
                    <MenuItem key="resultats">
                        <Link to="/resultats" style={{textDecoration: 'none'}}>
                                    <span className={captionClass}>
                                        Résultats
                                    </span>
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        )
            ;
    }

    renderMobile() {
        const captionClass = `link-caption {${this.props.darkTheme ? 'dark' : ''}`;
        return (
            <div {...style}>

                {
                    this.state.mobileMenuOpen &&

                    <Menu
                        className={`menu menu-mobile ${this.props.transparent ? 'transparent' : ''} `}
                        mode='vertical'
                    >
                        <MenuItem key="a-propos">
                            <Link to="/a-propos" style={{textDecoration: 'none'}}>
                                    <span className={captionClass}>
                                        À propos
                                    </span>
                            </Link>
                        </MenuItem>
                        <MenuItem key="gallerie">
                            <Link to="/gallerie" style={{textDecoration: 'none'}}>
                                    <span className={captionClass}>
                                        Gallerie
                                    </span>
                            </Link>
                        </MenuItem>
                        <MenuItem key="resultats">
                            <Link to="/resultats" style={{textDecoration: 'none'}}>
                                    <span className={captionClass}>
                                        Résultats
                                    </span>
                            </Link>
                        </MenuItem>
                    </Menu>
                }
                {
                    !this.state.mobileMenuOpen &&

                    <Menu
                        className={`menu ${this.props.transparent ? 'transparent' : ''}`}
                        mode='horizontal'
                    >
                        <MenuItem key="home">
                            <div
                                className="brand"
                                onClick={()=> this.setState({mobileMenuOpen: true}) }
                            >
                                <span className={captionClass}>
                                    <Icon type="menu-unfold"/>
                                </span>
                            </div>
                        </MenuItem>
                    </Menu>
                }
            </div>
        );
    }

    render() {
        return this.renderNonMobile();
        if (this.state.showMenuMobile) {
            //return this.renderMobile();
        }
    }
}

MainMenu.propTypes = {
    fixed: PropTypes.bool,
    darkTheme: PropTypes.bool
};

export default MainMenu;
