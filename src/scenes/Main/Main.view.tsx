/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';

import { Title } from '@game/components';
import * as Game from './components';

import { IOptions } from '@game/types';

import './style.scss';

interface IMain {
    options: IOptions;
    winner: boolean;
    turn: boolean;
    field: string[];
    children?: React.ReactNode;
}

export const MainView: React.FC<IMain> = (props) => {
    const { turn, winner } = props;

    const winnerClass = classNames({
        'winner__x-turn': winner && !turn,
        'winner__y-turn': winner && turn,
    });

    return (
        <Game.Container>
            <Game.Buttons />
            <Title
                className={winnerClass}
                title={
                    props.winner ? `Winner is ${props.turn ? 'Y' : 'X'}` : ''
                }
            />
            <Game.Fields />
        </Game.Container>
    );
};
