import * as React from 'react';
import { AppView } from './AppView';
import { observer, inject } from 'mobx-react';
import { GameDataModel } from 'client/models/game-data';
const { useEffect } = React;

interface IApp {
    gameDataModel?: GameDataModel;
}

export const App: React.FC<IApp> = inject('gameDataModel')(
    observer((props) => {
        const {
            field,
            winner,
            turn,
            handleFieldClick,
            resetGame,
            stepBack,
            changeTurn,
        } = props.gameDataModel as GameDataModel;

        useEffect(() => {
            resetGame();
        }, []);

        useEffect(() => {
            if (winner) {
                const leaders = JSON.parse(localStorage.getItem('leaders')!);
                leaders.push(!turn ? 'X' : 'Y');
                localStorage.setItem('leaders', JSON.stringify(leaders));
            }
        }, [winner]);

        const options = {
            handleClick: handleFieldClick,
            stepBack,
            changeTurn,
            resetGame,
        };

        return AppView({
            options,
            winner,
            turn,
            field,
        });
    })
);
