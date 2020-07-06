import * as React from 'react';

import { App } from 'client/scenes/App/App';
import { List } from 'client/scenes/List/List';
import { Header } from 'client/components/Header';
import { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'client/styles.scss';

export const RouteApp: React.FC = () => {
    useEffect(() => {
        const leaders = localStorage.getItem('leaders');

        if (!leaders) {
            localStorage.setItem('leaders', '[]');
        }
    }, []);

    return (
        <Router>
            <div className="wrapper">
                <div className="app">
                    <Header></Header>
                    <Switch>
                        <Route path="/" exact>
                            <App></App>
                        </Route>
                        <Route path="/leaders" exact>
                            <List></List>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
