export interface IOptions {
    resetGame: () => void;
    stepBack: () => void;
    changeTurn: () => void;
    handleClick: <T>(event: T, index: number) => void;
}
