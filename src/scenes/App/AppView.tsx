/* eslint-disable react/prop-types */
import * as React from 'react';
import './style.scss';
import { Field } from 'client/components/Field';

interface IApp {
    options: Record<string, any>;
    winner: boolean;
    turn: boolean;
    field: string[];
    children?: React.ReactNode;
}

export const AppView: React.FC<IApp> = (props) => {
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
        <div className="wrapper">
            <h1>
                {props.winner ? `Winner is ${props.turn ? 'Y' : 'X'}` : null}
            </h1>
            <button onClick={props.options.resetGame}>Reset Game</button>
            <div className="container">{...blocks}</div>;
        </div>
    );
};
