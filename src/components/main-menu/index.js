import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import style from './style';
import Menu from 'antd/lib/menu';
import Modal from 'antd/lib/modal';
import Icon from 'antd/lib/icon';
import MediaQuery from 'react-responsive';
const MenuItem = Menu.Item;

class MainMenu extends Component {

    componentWillMount() {
        this.setState({showMenuMobile: false, mobileMenuOpen: false});
    }

    renderNonMobile() {
        const captionClass = `link-caption ${this.props.darkTheme
            ? 'dark'
            : ''}`;
        const imgClass = `${this.props.darkTheme
            ? 'social-img-dark'
            : ''}`;
        const brandClass = `brand ${this.props.darkTheme
            ? 'dark'
            : ''}`;
        return (
            <div {...style}>
                <div className="left-part">
                    <Link
                        to="/"
                        style={{
                        textDecoration: 'none'
                    }}>
                        <div className={brandClass}>
                            Elliot Cardin
                        </div>
                    </Link>
                    <div className='social'>
                        <div className='item'>
                            <a href="https://www.strava.com/athletes/10504801">
                                <img src="/media/strava.png" alt="" className={imgClass}/>
                            </a>
                        </div>
                        <div className='item'>
                            <a href="https://www.facebook.com/elliot.cardin">
                                <img src="/media/facebook.png" alt="" className={imgClass}/>
                            </a>
                        </div>
                        <div className='item'>
                            <a href="https://www.instagram.com/elliotcardin/?hl=fr">
                                <img src="/media/instagram.png" alt="" className={imgClass}/>
                            </a>
                        </div>
                    </div>
                </div>
                <Menu
                    className={`menu ${this.props.fixed
                    ? 'fixed'
                    : ''}`}
                    mode='horizontal'>

                    <MenuItem key="a-propos">
                        <Link
                            to="/a-propos"
                            style={{
                            textDecoration: 'none'
                        }}>
                            <span className={captionClass}>
                                À propos
                            </span>
                        </Link>
                    </MenuItem>
                    <MenuItem key="galerie">
                        <Link
                            to="/galerie"
                            style={{
                            textDecoration: 'none'
                        }}>
                            <span className={captionClass}>
                                Galerie
                            </span>
                        </Link>
                    </MenuItem>
                    <MenuItem key="resultats">
                        <Link
                            to="/resultats"
                            style={{
                            textDecoration: 'none'
                        }}>
                            <span className={captionClass}>
                                Résultats
                            </span>
                        </Link>
                    </MenuItem>
                    <MenuItem key="blog">
                        <Link
                            to="/trans-vallee-2017"
                            style={{
                            textDecoration: 'none'
                        }}>
                            <span className={captionClass}>
                                Blog
                            </span>
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        );
    }

    renderMobile() {
        const captionClass = `link-caption ${this.props.darkTheme
            ? 'dark'
            : ''}`;
        const imgClass = `${this.props.darkTheme
            ? 'social-img-dark'
            : ''}`;
        const brandClass = `brand ${this.props.darkTheme
            ? 'dark'
            : ''}`;
        return (
            <div {...style}>

                {this.state.mobileMenuOpen && <Modal
                    visible={true}
                    style={{
                    top: 0,
                    height: '100vh'
                }}
                    footer={null}
                    closable={false}>
                    <div>
                        <div className="close-wrapper">
                            <Icon
                                type="close"
                                onClick={() => this.setState({mobileMenuOpen: false})}
                                style={{
                                ":hover": {
                                    cursor: 'pointer'
                                }
                            }}/>
                        </div>
                        <div
                            className="brand-wrapper"
                            style={{
                            paddingLeft: 16,
                            paddingTop: 16
                        }}>
                            <Link
                                to="/"
                                style={{
                                textDecoration: 'none',
                                color: 'black'
                            }}>
                                <div className={brandClass}>
                                    Elliot Cardin
                                </div>
                            </Link>
                        </div>
                        <Menu
                            className={`menu menu-mobile ${this.props.fixed
                            ? 'fixed'
                            : ''}`}
                            mode='vertical'
                            style={{
                            marginTop: 15
                        }}>
                            <MenuItem key="a-propos">
                                <Link
                                    to="/a-propos"
                                    style={{
                                    textDecoration: 'none'
                                }}>
                                    <span className={captionClass}>
                                        À propos
                                    </span>
                                </Link>
                            </MenuItem>
                            <MenuItem key="galerie">
                                <Link
                                    to="/galerie"
                                    style={{
                                    textDecoration: 'none'
                                }}>
                                    <span className={captionClass}>
                                        Galerie
                                    </span>
                                </Link>
                            </MenuItem>
                            <MenuItem key="resultats">
                                <Link
                                    to="/resultats"
                                    style={{
                                    textDecoration: 'none'
                                }}>
                                    <span className={captionClass}>
                                        Résultats
                                    </span>
                                </Link>
                            </MenuItem>
                            <MenuItem key="blog">
                                <Link
                                    to="/trans-vallee-2017"
                                    style={{
                                    textDecoration: 'none'
                                }}>
                                    <span className={captionClass}>
                                        Blog
                                    </span>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </div>
                </Modal>
                }

                {!this.state.mobileMenuOpen && <div>
                    <Menu className={`menu`} mode='horizontal'>
                        <MenuItem key="home">
                            <div
                                className={brandClass}
                                onClick={() => this.setState({mobileMenuOpen: true})}>
                                <span className={captionClass}>
                                    <Icon type="menu-unfold"/>
                                </span>
                            </div>
                        </MenuItem>

                    </Menu>
                    {this.props.fixSocial && <div className='social social-mobile'>
                        <div className='item'>
                            <a href="https://www.strava.com/athletes/10504801">
                                <img src="/media/strava.png" alt="" className={imgClass}/>
                            </a>
                        </div>
                        <div className='item'>
                            <a href="https://www.facebook.com/elliot.cardin">
                                <img src="/media/facebook.png" alt="" className={imgClass}/>
                            </a>
                        </div>
                        <div className='item'>
                            <a href="https://www.instagram.com/elliotcardin/?hl=fr">
                                <img src="/media/instagram.png" alt="" className={imgClass}/>
                            </a>
                        </div>
                    </div>}
                </div>}
            </div>
        );
    }

    render() {
        return (
            <div>
                <MediaQuery query='(max-width: 768px)'>
                    {this.renderMobile()}
                </MediaQuery>
                <MediaQuery query='(min-width: 769px)'>
                    {this.renderNonMobile()}
                </MediaQuery>
            </div>
        );
    }
}

MainMenu.propTypes = {
    fixed: PropTypes.bool,
    darkTheme: PropTypes.bool,
    fixSocial: PropTypes.bool
};

export default MainMenu;
