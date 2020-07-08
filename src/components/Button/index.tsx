/* eslint-disable react/prop-types */
import * as React from 'react';
import classNames from 'classnames';
import './styles.scss';

interface IOptions {
    handlerClick: (...params: any) => void;
    value: string;
    iconName: string;
}

interface IButtonProps {
    options: IOptions;
    children?: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = (props) => {
    const { options } = props;
    const { value, handlerClick, iconName } = options;
    const classnames = classNames(iconName, 'game-buttons__icon');

    return (
        <div className="button" onClick={handlerClick}>
            <i className={classnames}>
                <div className="game-buttons__title">{value}</div>
            </i>
        </div>
    );
};
