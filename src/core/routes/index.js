import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router';

/* Screens */
import Home from '../../containers/home/homeContainer';
import Favourite from '../../containers/favourite/favouriteContainer';

class AppRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/favourite' component={ Favourite } />
                <Redirect to="/404" />
            </Switch>
        )
    }
}

export default withRouter(AppRoute);
