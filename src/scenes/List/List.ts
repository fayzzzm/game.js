import { useState, useEffect } from 'react';
import { ListView } from 'client/scenes/List/ListView';

export const List = () => {
    const [leaders, setLeaders] = useState([]);
    useEffect(() => {
        const leaders = JSON.parse(localStorage.getItem('leaders') || '[]');
        setLeaders(leaders);
    }, []);

    return ListView({
        list: leaders,
    });
};
