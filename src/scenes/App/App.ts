import * as React from 'react';
import { AppView } from './AppView';
import { observer, inject } from 'mobx-react';
import { GameModel } from 'client/models/gameModel';
const { useEffect } = React;

interface IApp {
    gameModel?: GameModel;
}

export const App: React.FC<IApp> = inject('gameModel')(
    observer((props) => {
        const {
            field,
            winner,
            turn,
            handleFieldClick,
            resetGame,
            stepBack,
            changeTurn,
        } = props.gameModel as GameModel;

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
