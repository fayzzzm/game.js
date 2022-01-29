import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Main, List } from '@game/scenes';
import { Header } from '@game/components';

import '@game/styles.scss';

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
                    <Header />
                    <Switch>
                        <Route path="/" exact>
                            <Main />
                        </Route>
                        <Route path="/leaders" exact>
                            <List />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
