import React from 'react';

import { withNamespaces } from 'react-i18next';

/* Components */
import AppRoute from './routes';
/* Styles */
import '../assets/stylesheets/app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Welcome"
        }
    }
    render() {
        return (
            <div className="main-wrapper">
                <AppRoute />
            </div>
        );
    }
}

export default withNamespaces('common')(App); 