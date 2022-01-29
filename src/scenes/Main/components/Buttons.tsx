import React, { FC } from 'react';
import { inject } from 'mobx-react';

import { Button } from '@game/components';
import { GameModel } from '@models/game';

interface IButton {
    gameModel?: GameModel;
}

export const Buttons: FC<IButton> = inject('gameModel')((props) => {
    const { resetGame, stepBack, changeTurn } = props.gameModel as GameModel;

    return (
        <div className="game-buttons">
            <Button
                options={{
                    handleClick: resetGame,
                    value: 'reset game',
                    iconName: 'fas fa-undo',
                }}
            />
            <Button
                options={{
                    handleClick: stepBack,
                    value: 'step back',
                    iconName: 'fas fa-arrow-left',
                }}
            />
            <Button
                options={{
                    handleClick: changeTurn,
                    value: 'change turn',
                    iconName: 'fas fa-arrows-alt-h',
                }}
            />
        </div>
    );
});
