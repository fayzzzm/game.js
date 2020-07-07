import * as React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import './styles.scss';

export const Header: React.FC = () => {
    return (
        <header>
            <Link className="link" to="/">
                <i className="far fa-play-circle game-icon"></i>
            </Link>
            <Link className="link" to="/leaders">
                <i className="fas fa-trophy game-icon"></i>
            </Link>
        </header>
    );
};
