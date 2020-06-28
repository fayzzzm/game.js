import * as React from 'react';
import { Field } from 'client/components/Field';
import { checkWinner } from 'client/libs';
import './style.scss';

export const AppView: React.FC = (props: any) => {
    const [field, setField] = React.useState<string[]>([]);
    const [turn, setTurn] = React.useState(true);
    const [winner, setWinner] = React.useState(false);

    const options = {
        handleClick: (e: any, idx: number) => {
            if (field[idx] || winner) {
                console.warn("Can't do this");
                return;
            }

            turn ? (field[idx] = 'x') : (field[idx] = 'y');

            setField(field);
            setTurn(!turn);

            const isWinner = checkWinner(field);
            if (isWinner) setWinner(true);
        },
    };

    const resetGame = () => {
        setField([]);
        setTurn(true);
        setWinner(false);
    };
    const blocks = Array(9)
        .fill(0)
        .map((_, i) => (
            <Field
                key={Math.random() * i * 10}
                options={options}
                index={i}
                value={field[i]}
            ></Field>
        ));
    return (
        <div className="wrapper">
            <h1>{winner ? `Winner is ${turn ? 'Y' : 'X'}` : null}</h1>
            <button onClick={resetGame}>Reset Game</button>
            <div className="container">{...blocks}</div>;
        </div>
    );
};
