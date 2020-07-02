/* eslint-disable react/prop-types */
import * as React from 'react';
import './styles.scss';

interface IButtonProps {
    options: Record<string, any>;
    children?: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = (props) => {
    const { options } = props;
    return (
        <div className="button" onClick={options.handlerClick}>
            {options.value}
        </div>
    );
};
