import { observable, action } from 'mobx';

export class GameDataModel {
    @observable public field: string[] = Array(9).fill('');
    @observable public turn = true;
    @observable public winner = false;
    @observable public indexes: number[] = [];

    @action public updateField = (_field: string[]) => {
        this.field = _field;
    };

    @action public updateIndexes = (_indexes: number[]) => {
        this.indexes = _indexes;
    };

    @action public updateTurn = () => {
        this.turn = !this.turn;
    };

    @action public updateWinner = (_winner: boolean) => {
        this.winner = _winner;
    };
}
