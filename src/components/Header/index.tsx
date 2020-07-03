import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <header>
            <Link to="/">Play</Link>
            <Link to="/leaders">Leaders</Link>
        </header>
    );
};
