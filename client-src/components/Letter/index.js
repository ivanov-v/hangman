import React from 'react';
import ReactDOM from 'react-dom';

export class Letter extends React.Component {
    static defaultProps = {
        onClick: () => {},
    };

    render() {
        const {children, isActive, onClick} = this.props;

        return (
            <button
                className={isActive ? 'active' : ''}
                type='button'
                onClick={onClick}
                disabled={isActive}
            >
                {children}
            </button>
        );
    }
}
