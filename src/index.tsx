import * as React from 'react';
import { render } from 'react-dom';
import { RouteApp } from 'client/router';
import * as models from 'client/models';
import { Provider } from 'mobx-react';

render(
    <Provider {...models}>
        <RouteApp></RouteApp>
    </Provider>,
    document.getElementById('root')
);
