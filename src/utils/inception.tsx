import React from 'react';
import { Field } from '../components/Field';

export const initGame = () => {
    const blocks = Array(9)
        .fill(0)
        .map((_, i) => (
            <Field
                key={Math.random() * i * 10}
                handleClick={handleClick}
                index={i}
                value={props.field[i]}
            ></Field>
        ));
};
