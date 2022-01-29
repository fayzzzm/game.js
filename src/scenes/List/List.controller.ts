import { useState, useEffect, FC } from 'react';
import { ListView } from './List.view';

export const List: FC = () => {
    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        const leaders = JSON.parse(localStorage.getItem('leaders') || '[]');
        setLeaders(leaders);
    }, []);

    return ListView({
        list: leaders,
    });
};
