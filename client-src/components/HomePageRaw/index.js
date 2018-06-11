import React from 'react';
import ReactDOM from 'react-dom';
import {Category} from '@/components/Category';

export class HomePageRaw extends React.Component {
    render() {
        const {onPlay} = this.props;

        return (
            <div>
                <h1>Виселица</h1>
                <button type="button" onClick={onPlay}>
                    Начать игру
                </button>
                <br/>
                <Category type='food' title='Еда' coins={0} locked={false} />
                <br/>
                <Category type='animals' title='Животные' coins={20} locked={true} />
                <br/>
                <Category type='sport' title='Спорт' coins={30} locked={true} />
            </div>
        );
    }
}
