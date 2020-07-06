import * as React from 'react';
import { AppView } from './AppView';
import { observer, inject } from 'mobx-react';
import { gameDataModel } from 'client/models';

export const App: React.FC = inject('gameDataModel')(
    observer((props) => {
        const { field, winner, turn, handleFieldClick } = gameDataModel;

        console.log(handleFieldClick);
        const options = {
            handleClick: handleFieldClick,
        };

        return AppView({
            options,
            winner,
            turn,
            field,
        });
    })
);
