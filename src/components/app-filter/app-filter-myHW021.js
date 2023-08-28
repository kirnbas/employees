import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: 0 // 0 - Все сотрудники, 1 - На повышение, 2 - З/П больше 1000$
        }
    }

    onBtnClicked = (e) => {
        const clickedBtnType = +e.target.getAttribute('data-selection');

        const activeClass = 'btn-light';
        const inactiveClass = 'btn-outline-light';

        for (let el of Array.prototype.slice.call(e.target.parentNode.children)) {
            el.classList.remove(activeClass);
            el.classList.add(inactiveClass);
        }

        e.target.classList.remove(inactiveClass);
        e.target.classList.add(activeClass);
        
        this.setState({ selection: clickedBtnType });
        this.props.onFilterSelected(clickedBtnType);
    }

    render() {
        return (
            <div className="btn-group">
                <button 
                    className="btn btn-light"
                    type="button"
                    onClick={this.onBtnClicked}
                    data-selection="0">
                        Все сотрудники
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button"
                    onClick={this.onBtnClicked}
                    data-selection="1">
                        На повышение
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button"
                    onClick={this.onBtnClicked}
                    data-selection="2">
                        З/П больше 1000$
                </button>
            </div>
        );
    }
};

export default AppFilter;