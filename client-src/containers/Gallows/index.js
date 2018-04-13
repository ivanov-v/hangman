import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getLives} from '~/selectors';

const Svg = styled.svg`
    display: block;
    margin: 20px auto;
`;

export class GallowsSvg extends React.Component {
    render() {
        const {lives} = this.props;

        return (
            <Svg width="150" viewBox="0 0 380 512" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <path
                        d="M374.874 49.908H186.337c-4.081 0-7.639 3.145-7.761 7.224a7.452 7.452 0 0 0 7.449 7.68h178.913v37.258H15.06V64.813h118.015c4.081 0 7.639-3.145 7.761-7.224a7.452 7.452 0 0 0-7.449-7.68h-29.878V4.968A4.968 4.968 0 0 0 98.541 0H41.41a4.968 4.968 0 0 0-4.968 4.968v44.94H5.124a4.968 4.968 0 0 0-4.968 4.968v57.131a4.968 4.968 0 0 0 4.968 4.968h31.318v390.056a4.968 4.968 0 0 0 4.968 4.968h57.131a4.968 4.968 0 0 0 4.968-4.968V294.567c0-4.08-3.144-7.639-7.223-7.761a7.452 7.452 0 0 0-7.682 7.449v202.841H51.346v-380.12h37.258v123.808c0 4.08 3.144 7.639 7.223 7.761a7.452 7.452 0 0 0 7.682-7.449v-124.12l190.324.002h81.041a4.968 4.968 0 0 0 4.968-4.968V54.877a4.969 4.969 0 0 0-4.968-4.969zM51.347 14.904h37.258v35.004H51.347V14.904z"
                        fill="#000"
                        fillRule="nonzero"
                    />
                    <g transform="translate(208 116)" stroke="#000" strokeWidth="15">
                        {lives < 4 && (
                            <ellipse
                                transform="rotate(42 61.297 80.706)"
                                cx="61.297"
                                cy="80.706"
                                rx="36.538"
                                ry="42.061"
                            />
                        )
                        //голова
                        }
                        {lives < 3 && (
                            <path
                                strokeLinecap="square"
                                d="M54.5 133.5V201.308l6.277 41.848"
                            />
                        )
                        //туловище
                        }
                        {lives < 1 && (
                            <path
                                strokeLinecap="square"
                                d="M63 247l26.778 58.604-10.864 53.362"
                            />
                        )
                        //правая нога
                        }
                        {lives < 1 && (
                            <path d="M58.5 255.5l-50 83" strokeLinecap="square" />
                        )
                        //левая нога
                        }
                        {lives < 2 && (
                            <path
                                strokeLinecap="square"
                                d="M56 143l35 45.496 11.132 44.605"
                            />
                        )
                        //правая рука
                        }
                        {lives < 2 && (
                            <path
                                d="M53.272 143c-14.153 23.154-24.587 39.19-31.303 48.11-6.716 8.92-14.04 24.956-21.969 48.11"
                                strokeLinecap="square"
                            />
                        )
                        //левая рука
                        }
                        {lives < 4 && <path d="M54.5.5v39" strokeLinecap="square" />
                        //веревка
                        }
                    </g>
                </g>
            </Svg>
        );
    }
}

const mapStateToProps = state => ({
    lives: getLives(state),
});

export const Gallows = connect(mapStateToProps)(GallowsSvg);
