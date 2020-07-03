/* eslint-disable react/prop-types */
import * as React from 'react';

interface IListView {
    list: string[];
}

export const ListView: React.FC<IListView> = (props) => {
    const { list } = props;
    return (
        <div className="classname">
            {...list.map((node, idx) => (
                <span key={Math.random() ** idx * 10}>{node}</span>
            ))}
        </div>
    );
};
