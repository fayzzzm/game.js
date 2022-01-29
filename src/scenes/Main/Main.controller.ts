import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react';

import { GameModel } from '@models/game';
import { MainView } from './Main.view';

interface IApp {
    gameModel?: GameModel;
}

export const Main: React.FC<IApp> = inject('gameModel')(
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

        return MainView({
            options,
            winner,
            turn,
            field,
        });
    })
);
