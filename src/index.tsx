import * as React from 'react';
import * as models from 'client/models';
import { render } from 'react-dom';
import { RouteApp } from 'client/router';
import { Provider } from 'mobx-react';

render(
    <Provider {...models}>
        <RouteApp></RouteApp>
    </Provider>,
    document.getElementById('root')
);
