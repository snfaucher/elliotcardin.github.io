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
        return (
            <div {...style}>
                <div className="brand">Elliot Cardin</div>
                <Menu
                    className="menu"
                    mode='horizontal'
                >

                    <MenuItem key="a-propos">
                        <Link to="/a-propos" style={{textDecoration: 'none'}}>
                                    <span className="link-caption">
                                        À propos
                                    </span>
                        </Link>
                    </MenuItem>
                    <MenuItem key="gallerie">
                        <Link to="/gallerie" style={{textDecoration: 'none'}}>
                                    <span className="link-caption">
                                        Gallerie
                                    </span>
                        </Link>
                    </MenuItem>
                    <MenuItem key="resultats">
                        <Link to="/resultats" style={{textDecoration: 'none'}}>
                                    <span className="link-caption">
                                        Résultats
                                    </span>
                        </Link>
                    </MenuItem>
                </Menu>
                </div>
        );
    }

    renderMobile() {
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
                                    <span className="link-caption">
                                        À propos
                                    </span>
                            </Link>
                        </MenuItem>
                        <MenuItem key="gallerie">
                            <Link to="/gallerie" style={{textDecoration: 'none'}}>
                                    <span className="link-caption">
                                        Gallerie
                                    </span>
                            </Link>
                        </MenuItem>
                        <MenuItem key="resultats">
                            <Link to="/resultats" style={{textDecoration: 'none'}}>
                                    <span className="link-caption">
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
                                <span className="link-caption">
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
    transparent: PropTypes.bool
};

export default MainMenu;
