import React from 'react';
import PropTypes from 'prop-types';

interface ITitle {
    className: string;
    title: string;
}

export const Title: React.FC<ITitle> = (props) => {
    const { className, title } = props;

    return <h1 className={className}>{title}</h1>;
};

Title.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
