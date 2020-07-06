import { observable, action } from 'mobx';
import { checkWinner } from 'client/libs';

export class GameDataModel {
    @observable public field: string[] = Array(9).fill('');
    @observable public turn = true;
    @observable public winner = false;
    @observable public indexes: number[] = [];

    @action public resetGame = (): void => {
        this.updateWinner(false);
        this.updateField([]);
        this.updateTurn();
    };

    @action public stepBack = (): void => {
        if (this.indexes.length === 0) {
            return;
        }

        const _field = [...this.field];
        const _indexes = [...this.indexes];
        const { length } = _indexes;
        const [index] = _indexes.splice(length - 1, 1);

        _field[index] = '';

        if (this.winner) {
            this.updateWinner(false);
        }

        this.updateField(_field);
        this.updateIndexes(_indexes);
        this.updateTurn();
    };

    @action public handleFieldClick = (event: Event, idx: number): void => {
        const _field = [...this.field];
        if (this.field[idx] || this.winner) {
            console.warn("Can't do this");
            return;
        }

        this.turn ? (_field[idx] = 'x') : (_field[idx] = 'y');

        this.updateIndexes(this.indexes.concat(idx));
        this.updateField(_field);
        this.updateTurn();

        const isWinner = checkWinner(_field);
        if (isWinner) {
            const leaders = JSON.parse(localStorage.getItem('leaders')!);
            leaders.push(this.turn ? 'X' : 'Y');
            localStorage.setItem('leaders', JSON.stringify(leaders));

            this.updateWinner(true);
        }
    };

    @action public updateField = (field: string[]): void => {
        this.field = field;
    };

    @action public updateIndexes = (indexes: number[]): void => {
        this.indexes = indexes;
    };

    @action public updateTurn = (): void => {
        this.turn = !this.turn;
    };

    @action public updateWinner = (winner: boolean): void => {
        this.winner = winner;
    };
}
