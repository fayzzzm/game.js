import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

interface IContainer {
    children: ReactNode;
}

export const Container: FC = (props) => {
    return <div className="game-container">{props.children}</div>;
};

Container.propTypes = {
    children: PropTypes.node,
};
