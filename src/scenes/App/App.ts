import * as React from 'react';
import { checkWinner } from 'client/libs';
import { observer, inject } from 'mobx-react';
import { AppView } from './AppView';
import { gameDataModel } from 'client/models';

export const App: React.FC = inject('gameDataModel')(
    observer((props) => {
        const {
            field,
            winner,
            turn,
            indexes,
            updateField,
            updateIndexes,
            updateTurn,
            updateWinner,
        } = gameDataModel;

        const options = {
            handleClick: (
                e: React.ReactEventHandler<HTMLDivElement>,
                idx: number
            ) => {
                const _field = [...field];
                if (field[idx] || winner) {
                    console.warn("Can't do this");
                    return;
                }

                turn ? (_field[idx] = 'x') : (_field[idx] = 'y');

                updateIndexes(indexes.concat(idx));
                updateField(_field);
                updateTurn();

                const isWinner = checkWinner(_field);
                if (isWinner) {
                    const leaders = JSON.parse(
                        localStorage.getItem('leaders')!
                    );
                    leaders.push(turn ? 'X' : 'Y');
                    localStorage.setItem('leaders', JSON.stringify(leaders));

                    updateWinner(true);
                }
            },
            resetGame: () => {
                updateField([]);
                updateTurn();
                updateWinner(false);
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

                updateField(_field);
                updateIndexes(_indexes);
                updateTurn();
            },
        };

        return AppView({
            options,
            winner,
            turn,
            field,
        });
    })
);
