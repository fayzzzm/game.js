import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export const Header: React.FC = () => {
    return (
        <header>
            <Link className="link" to="/">
                <i className="far fa-play-circle game-buttons__icon">
                    <div className="game-buttons__title">Play</div>
                </i>
            </Link>
            <Link className="link" to="/leaders">
                <i className="fas fa-trophy game-buttons__icon">
                    <div className="game-buttons__title">Leader list</div>
                </i>
            </Link>
        </header>
    );
};
