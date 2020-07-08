/* eslint-disable react/prop-types */
import * as React from 'react';
import './style.scss';
import { Field } from 'client/components/Field';
import { Button } from 'client/components/Button';

interface IApp {
    options: Record<string, any>;
    winner: boolean;
    turn: boolean;
    field: string[];
    children?: React.ReactNode;
}

export const AppView: React.FC<IApp> = (props) => {
    const { resetGame, stepBack, changeTurn } = props.options;
    const blocks = Array(9)
        .fill(0)
        .map((_, i) => (
            <Field
                key={Math.random() * i * 10}
                options={props.options}
                index={i}
                value={props.field[i]}
            ></Field>
        ));

    return (
        <div className="game-container">
            <div className="game-buttons">
                <Button
                    options={{
                        handlerClick: resetGame,
                        value: 'reset game',
                        iconName: 'fas fa-undo',
                    }}
                />
                <Button
                    options={{
                        handlerClick: stepBack,
                        value: 'step back',
                        iconName: 'fas fa-arrow-left',
                    }}
                />
                <Button
                    options={{
                        handlerClick: changeTurn,
                        value: 'change turn',
                        iconName: 'fas fa-arrows-alt-h',
                    }}
                />
            </div>
            <h1>
                {props.winner ? `Winner is ${props.turn ? 'Y' : 'X'}` : null}
            </h1>
            <div className="game-field">{...blocks}</div>;
        </div>
    );
};
