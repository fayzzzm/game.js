import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';

import * as models from '@game/models';
import { RouteApp } from '@game/router';

render(
    <Provider {...models}>
        <RouteApp></RouteApp>
    </Provider>,
    document.getElementById('root')
);
