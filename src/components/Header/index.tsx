import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'client/components/Button';
import { inject, observer } from 'mobx-react';

import './styles.scss';
import { gameDataModel } from 'client/models';

export const Header: React.FC = inject('gameDataModel')(
    observer(() => {
        const { resetGame, stepBack, changeTurn } = gameDataModel;
        return (
            <header>
                <Link className="link" to="/">
                    Play
                </Link>
                <Link className="link" to="/leaders">
                    Leaders
                </Link>
                <div className="game-buttons">
                    <Button
                        options={{
                            handlerClick: resetGame,
                            value: 'Reset Game',
                        }}
                    ></Button>
                    <Button
                        options={{
                            handlerClick: stepBack,
                            value: 'Step Back',
                        }}
                    ></Button>
                    <Button
                        options={{
                            handlerClick: changeTurn,
                            value: 'Change Turn',
                        }}
                    ></Button>
                </div>
            </header>
        );
    })
);
