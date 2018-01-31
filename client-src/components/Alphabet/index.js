import React from 'react';
import ReactDOM from 'react-dom';

export class Alphabet extends React.PureComponent {
    render() {
        const {
            children,
        } = this.props;

        return (
            <ul>
                {children.map((child, index) =>
                    <li key={index}>{child}</li>
                )}
            </ul>
        );
    }
}
