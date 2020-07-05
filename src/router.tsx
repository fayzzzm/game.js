import * as React from 'react';

import { App } from 'client/scenes/App/App';
import { List } from 'client/scenes/List/List';
import { Header } from 'client/components/Header';
import { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

export const RouteApp: React.FC = () => {
    useEffect(() => {
        const leaders = localStorage.getItem('leaders');

        if (!leaders) {
            localStorage.setItem('leaders', '[]');
        }
    }, []);

    return (
        <Router>
            <Header></Header>
            <Switch>
                <Route path="/" exact>
                    <App></App>
                </Route>
                <Route path="/leaders" exact>
                    <List></List>
                </Route>
            </Switch>
        </Router>
    );
};
