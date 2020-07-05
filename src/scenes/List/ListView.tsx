/* eslint-disable react/prop-types */
import * as React from 'react';
import './styles.scss';

interface IListView {
    list: string[];
}

export const ListView: React.FC<IListView> = (props) => {
    const { list } = props;
    return (
        <div className="wrapper">
            {...list.map((node, idx) => (
                <span className="winner" key={Math.random() ** idx * 10}>
                    <strong>
                        {node} won at {idx + 1} turn
                    </strong>
                </span>
            ))}
        </div>
    );
};
