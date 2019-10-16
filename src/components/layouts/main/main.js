import React from 'react';

import { withNamespaces } from 'react-i18next';

/* Components */
import Footer from '../../../components/layouts/footer/footer';
import Header from '../../../components/layouts/header/header';

/* Styles */
import './main.css';

class MainWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Welcome"
        }
    }

    render() {
        return (
            <div className="client-wrapper">
                <Header />
                    { this.props.children }
                <Footer />
            </div>
        );
    }
}

export default withNamespaces('common')(MainWrapper);