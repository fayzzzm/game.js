export const checkWinner = (arr: string[]): boolean => {
    const winPositions = [
        '123',
        '456',
        '789',
        '147',
        '258',
        '369',
        '159',
        '357',
    ];

    return winPositions.some((s) => {
        return (
            new Set(
                Array.from(s).map(
                    (index: string) => arr[+index - 1] || Math.random() * 10
                )
            ).size === 1
        );
    });
};
