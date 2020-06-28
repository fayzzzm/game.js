/* eslint-disable react/prop-types */
import * as React from 'react';
import './styles.scss';

interface IFieldProps {
    options: any;
    index: number;
    value: string;
    children?: JSX.Element;
}

export const Field: React.FC<IFieldProps> = (props) => {
    const { index, value } = props;
    const { handleClick } = props.options;

    return (
        <div className="field" onClick={() => handleClick(event, index)}>
            {value ? value : ''}
        </div>
    );
};
