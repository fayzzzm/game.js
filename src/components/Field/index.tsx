/* eslint-disable react/prop-types */
import * as React from 'react';
import classNames from 'classnames';
import { inject } from 'mobx-react';
import { GameModel } from 'client/models/gameModel';

import './styles.scss';

interface IFieldProps {
    index: number;
    value: string;
    children?: JSX.Element;
    gameDataModel?: GameModel;
    handleClick: <T>(event: T, index: number) => void;
}

export const Field: React.FC<IFieldProps> = inject('gameDataModel')((props) => {
    const { index, value = '', handleClick, gameDataModel } = props;
    const { turn, winner } = gameDataModel as GameModel;

    const classname = classNames(
        {
            'field__x-turn': value === 'x',
            'field__y-turn': value === 'y',
            'hover__x-turn': turn && !value && !winner,
            'hover__y-turn': !turn && !value && !winner,
        },
        'field'
    );

    return (
        <div
            className={classname}
            onClick={(event) => handleClick(event, index)}
        >
            {value}
        </div>
    );
});
