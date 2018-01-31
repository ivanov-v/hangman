import React from 'react';
import ReactDOM from 'react-dom';

export class Letter extends React.PureComponent {
    static defaultProps = {
        onClick: () => {},
    };

    handleClick = () => {
        const {data, onClick} = this.props;

        onClick(data);
    };

    render() {
        const {
            children,
        } = this.props;

        return (
            <button type='button' onClick={this.handleClick}>{children}</button>
        );
    }
};
