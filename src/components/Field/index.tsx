/* eslint-disable react/prop-types */
import * as React from 'react';
import classNames from 'classnames';
import { inject } from 'mobx-react';
import { GameDataModel } from 'client/models/game-data';
import './styles.scss';

interface IFieldProps {
    options: any;
    index: number;
    value: string;
    children?: JSX.Element;
    gameDataModel?: GameDataModel;
}

export const Field: React.FC<IFieldProps> = inject('gameDataModel')((props) => {
    const { index, value } = props;
    const { handleClick } = props.options;
    const { turn, winner } = props.gameDataModel as GameDataModel;

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
        <div className={classname} onClick={() => handleClick(event, index)}>
            {value ? value : ''}
        </div>
    );
});
