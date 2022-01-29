/* eslint-disable react/prop-types */
import * as React from 'react';
import './style.scss';
import { Field } from 'client/components/Field';
import { Button } from 'client/components/Button';
import classNames from 'classnames';

import { IOptions } from '../../types';

interface IApp {
    options: IOptions;
    winner: boolean;
    turn: boolean;
    field: string[];
    children?: React.ReactNode;
}

export const AppView: React.FC<IApp> = (props) => {
    const { resetGame, stepBack, changeTurn, handleClick } = props.options;
    const { turn, winner, field } = props;

    const winnerClass = classNames({
        'winner__x-turn': winner && !turn,
        'winner__y-turn': winner && turn,
    });

    const Fields = field.map((value, index) => {
        const props = {
            index,
            value,
            handleClick,
        };
        return <Field key={index + value} {...props}></Field>;
    });

    return (
        <div className="game-container">
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
            <h1 className={winnerClass}>
                {props.winner ? `Winner is ${props.turn ? 'Y' : 'X'}` : null}
            </h1>
            <div className="game-field">{Fields}</div>;
        </div>
    );
};
