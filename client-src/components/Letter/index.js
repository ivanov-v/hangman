import React from 'react';
import ReactDOM from 'react-dom';

export class Letter extends React.Component {
    static defaultProps = {
        onClick: () => {},
    };

    handleClick = () => {
        const {data, onClick} = this.props;

        onClick(data);
    };

    render() {
        const {children, isActive} = this.props;

        return (
            <button
                className={isActive ? 'active' : ''}
                type='button'
                onClick={this.handleClick}
            >
                {children}
            </button>
        );
    }
};
