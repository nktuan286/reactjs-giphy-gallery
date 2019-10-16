import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './header.css';

class HeaderMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowCollapse: false
        }
    }

    onShowCollapse = () => {
        const isShow = document.querySelector('.navbar-collapse.show');
        if (isShow === null) {
            this.setState({
                isShowCollapse: true
            })
        } else {
            this.setState({
                isShowCollapse: false
            })
        }
    }

    render() {
        const isShowMenu = this.state.isShowCollapse ? 'isShowMenu' : '';
        return (
            <Navbar bg="light" expand="lg" className="scrolled">
                <Container>
                    <NavLink exact={true} to="/" className="navbar-brand z-index-11 text-primary-0 nav-bd">
                        Gallereasy
                    </NavLink>
                    <div className="z-index-11 mgt-cus">
                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            onClick={this.onShowCollapse}
                            className={isShowMenu}
                        />
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto navbar-mb-custom-1">
                            <NavLink activeClassName={"active"} exact={true} to="/" className="nav-link">Search</NavLink>
                            <NavLink 
                                activeClassName={"active"} 
                                to="/favourite" 
                                className="nav-link"
                            >
                                {`Favourites (${this.props.favouriteItems.length})`}
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favouriteItems: state.favouriteItems.favouriteData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMain);