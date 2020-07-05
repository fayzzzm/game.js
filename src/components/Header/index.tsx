import * as React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export const Header: React.FC = () => {
    return (
        <div className="wrapper">
            <header>
                <Link className="link" to="/">
                    Play
                </Link>
                <Link className="link" to="/leaders">
                    Leaders
                </Link>
            </header>
        </div>
    );
};
