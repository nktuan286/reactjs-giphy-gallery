import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { withNamespaces } from 'react-i18next';
import { Helmet } from 'react-helmet';
import MainWrapper from '../../layouts/main/main';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Input, Spin } from 'antd';
import FavoriteIconAdd from '../../../assets/images/icons/heart-inactive.png';
import FavoriteIconRemove from '../../../assets/images/icons/heart-active.png';
import './homeScreen.css';

const { Search } = Input;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Welcome to 2359 media',
            result: [],
            keyword: '',
            limit: 8,
            loadMore: false,
            favorite: false,
            offset: 1
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchResult.isSuccess && !nextProps.searchResult.isError && nextProps.searchResult.dataSuccess) {
            if (!this.state.favorite) {
                if (this.state.loadMore) {
                    let newResult = [...this.state.result];
                    this.setState({
                        result: newResult.concat(nextProps.searchResult.dataSuccess)
                    })
                } else {
                    this.setState({
                        result: nextProps.searchResult.dataSuccess
                    })
                }
            }
        } 
        else if (nextProps.searchResult.isError && nextProps.searchResult.dataError) {
            this.setState({
                result: []
            })
        }
    }

    componentWillUnmount() {
        this.props._reset();
    }

    _searchImage = (keyword, limit, offset) => {
        if (keyword !== '') {
            this.setState({
                keyword,
                limit,
                offset,
                loadMore: false,
                favorite: false
            }, () => {
                const dataSearch = {
                    searchType: 'gif',
                    limit,
                    offset,
                    keyword
                }
                this.props._search(dataSearch);
            })
        }
    }

    _loadMore(limit, offset) {
        const { keyword } = this.state;
        this.setState({
            offset,
            loadMore: true,
            favorite: false
        }, () => {
            const dataSearch = {
                searchType: 'gif',
                limit,
                offset,
                keyword
            }
            this.props._search(dataSearch);
        })
    }

    _addOrRemoveFavourite = (item, type) => {
        this.setState({
            favorite: true,
        }, () => {
            if (type === 'add') {
                this.props._addFavourite(item);
            } else {
                this.props._removeFavourite(item);
            }
        })
    }

    _removeFavourite = (item) => {
        this.setState({
            favorite: true,
        }, () => {
            
        })
    }

    render() {
        const { result } = this.state;
        const { searchResult, favouriteItems } = this.props;
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
                                <div className="text-center stories-desc mgb-30">
                                    <Search
                                        placeholder="Start searching for images"
                                        onSearch={(val) => this._searchImage(val, 8, 1)}
                                    />
                                </div>
                                <Row className="stories-flex mgt-20">
                                    {
                                        result && result.length > 0 
                                        ?
                                            result &&
                                            result.length &&
                                            result.map((item, index) => {
                                                const check = favouriteItems && favouriteItems.filter(i => i.id === item.id);
                                                const type = check[0] ? 'remove' : 'add';
                                                const img = check[0] ? FavoriteIconRemove : FavoriteIconAdd;
                                                const subClasses = `stories-sub-title add-cursor ${check[0] ? 'remove' : 'add'}`;
                                                const mainClasses = `stories-text-fix-bottom ${check[0] ? '' : 'visibility-custom'}`;
                                                return (
                                                    <Col key={index} className="stories-flex-item text-left mgb-25" sm={6} md={3} xs={12} lg={3}>
                                                        <div 
                                                            className="stories-flex-item-background" 
                                                            style={{ backgroundImage: `url(${item.images && item.images.downsized.url})` }}
                                                        >
                                                            <div className="layer-stories">
                                                            </div>
                                                                <div className={mainClasses}>
                                                                    <div 
                                                                        className={subClasses} 
                                                                        onClick={() => this._addOrRemoveFavourite(item, type)}
                                                                    >
                                                                        <img src={img} alt="" className="img-wh-35" />
                                                                    </div>
                                                                </div> 
                                                        </div>
                                                    </Col>
                                                )
                                            })
                                        :
                                        searchResult.isError && 
                                        searchResult.dataError && 
                                        !searchResult.isLoading &&
                                        <div className="custom-style-0">
                                            <Col xs={12}>
                                                {searchResult.dataError.msg}
                                            </Col>
                                        </div>
                                    }
                                </Row>
                                <div className="text-center mgb-10">
                                    <Spin spinning={this.props.searchResult.isLoading} />
                                </div>
                                {
                                    result && result.length > 0 
                                    ?
                                        <div className="text-center">
                                            <Button size="large" type="primary" className="btn-primary-0" onClick={() => this._loadMore(this.state.limit, this.state.offset + this.state.limit)}>
                                                Fetch More
                                            </Button>
                                        </div>
                                    : null
                                }
                            </Container>
                        </section>
                    </main>
                </MainWrapper>
            </React.Fragment>
        )
    }
}

export default withNamespaces('common')(Home);