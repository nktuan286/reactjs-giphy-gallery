import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { Helmet } from 'react-helmet';
import MainWrapper from '../../layouts/main/main';
import { Row, Col, Container } from 'react-bootstrap';
import FavoriteIconRemove from '../../../assets/images/icons/heart-active.png';
import './favouriteScreen.css';

class Favourite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Favourite - 2359 Media'
        }
    }

    _removeFavourite = (item) => {
        this.props._removeFavourite(item);
    }

    render() {
        const { favouriteItems } = this.props;
        return (
            <React.Fragment>
                <MainWrapper>
                    <Helmet>
                        <title>{this.state.title}</title>
                        <meta name="description" content={this.state.title} />
                    </Helmet>
                    <main role="main" className="page-content">
                        <section className="stories-wrapper">
                            <Container>
                                <h2>Favourite Images</h2>
                                <Row className="stories-flex mgt-20">
                                    {
                                        favouriteItems && favouriteItems.length > 0 
                                        ?
                                            favouriteItems &&
                                            favouriteItems.length &&
                                            favouriteItems.map((item, index) => {
                                                return (
                                                    <Col key={index} className="stories-flex-item text-left mgb-25" sm={6} md={3} xs={12} lg={3}>
                                                        <div 
                                                            className="stories-flex-item-background" 
                                                            style={{ backgroundImage: `url(${item.images && item.images.downsized.url})` }}
                                                        >
                                                            <div className="layer-stories">
                                                            </div>
                                                            <div className="stories-text-fix-bottom">
                                                                <div 
                                                                    className="stories-sub-title add-cursor" 
                                                                    onClick={() => this._removeFavourite(item)}
                                                                >
                                                                    <img src={FavoriteIconRemove} alt="" className="img-wh-35" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                )
                                            })
                                        :
                                        <div className="custom-style-0">
                                            <Col xs={12}>
                                                You don't have any favourite!
                                            </Col>
                                        </div>
                                    }
                                </Row>
                            </Container>
                        </section>
                    </main>
                </MainWrapper>
            </React.Fragment>
        )
    }
}

export default withNamespaces('common')(Favourite);