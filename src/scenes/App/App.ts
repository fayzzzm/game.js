import * as React from 'react';
import { checkWinner } from 'client/libs';
import { AppView } from './AppView';

interface IApp {
    children?: React.ReactNode;
}

export const App: React.FC<IApp> = (_) => {
    const [field, setField] = React.useState<string[]>(Array(9).fill(''));
    const [turn, setTurn] = React.useState(true);
    const [winner, setWinner] = React.useState(false);
    const [indexes, setIndexes] = React.useState<number[]>([]);

    const options = {
        handleClick: (e: Event, idx: number) => {
            const _field = [...field];
            if (field[idx] || winner) {
                console.warn("Can't do this");
                return;
            }

            turn ? (_field[idx] = 'x') : (_field[idx] = 'y');

            setIndexes(indexes.concat(idx));
            setField(_field);
            setTurn(!turn);

            const isWinner = checkWinner(_field);
            if (isWinner) setWinner(true);
        },
        resetGame: () => {
            setField([]);
            setTurn(true);
            setWinner(false);
        },
        stepBack: () => {
            if (indexes.length === 0) {
                return;
            }

            const _field = [...field];
            const _indexes = [...indexes];
            const { length } = _indexes;
            const [index] = _indexes.splice(length - 1, 1);

            _field[index] = '';

            setField(_field);
            setIndexes(_indexes);
            setTurn(!turn);
        },
    };

    return AppView({
        options,
        winner,
        turn,
        field,
    });
};
