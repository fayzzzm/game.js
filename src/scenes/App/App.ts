import * as React from 'react';
import { checkWinner } from 'client/libs';
import { AppView } from './AppView';

interface IApp {
    children?: React.ReactNode;
}

export const App: React.FC<IApp> = (_) => {
    const [field, setField] = React.useState<string[]>([]);
    const [turn, setTurn] = React.useState(true);
    const [winner, setWinner] = React.useState(false);

    const options = {
        handleClick: (e: Event, idx: number) => {
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
        resetGame: () => {
            setField([]);
            setTurn(true);
            setWinner(false);
        },
    };

    return AppView({
        options,
        winner,
        turn,
        field,
    });
};
