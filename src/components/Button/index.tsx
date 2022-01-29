/* eslint-disable react/prop-types */
import * as React from 'react';
import classNames from 'classnames';
import './styles.scss';

interface IOptions {
    handleClick: <T>(event: T) => void;
    value: string;
    iconName: string;
}

interface IButtonProps {
    options: IOptions;
    children?: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = (props) => {
    const {
        options: { value, handleClick, iconName },
    } = props;

    const classnames = classNames(iconName, 'game-buttons__icon');

    return (
        <div className="button" onClick={handleClick}>
            <i className={classnames}>
                <div className="game-buttons__title">{value}</div>
            </i>
        </div>
    );
};
