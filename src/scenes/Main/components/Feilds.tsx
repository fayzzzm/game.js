import React, { FC } from 'react';
import { inject, observer } from 'mobx-react';

import { Field } from '@game/components';
import { GameModel } from '@models/game';

interface IFields {
    gameModel?: GameModel;
}

export const Fields: FC<IFields> = inject('gameModel')(
    observer((props) => {
        const { field, handleFieldClick } = props.gameModel as GameModel;

        return (
            <div className="game-fields">
                {field.map((value, index) => {
                    const props = {
                        index,
                        value,
                        handleClick: handleFieldClick,
                    };

                    return <Field key={index + value} {...props} />;
                })}
            </div>
        );
    })
);
