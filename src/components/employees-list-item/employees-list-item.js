import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
    onChangeSalary= (e) => {
        const salary = +e.target.value.slice(0, -1);
        this.props.onChangeSalary(this.props.id, salary);
    }

    render () {
        const { name, salary, onDelete, onToggleProp, increase, rise } = this.props;

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }
        if (rise) {
            classNames += ' like';
        }
//{style={{ fontSize: '40px', color: 'red', transition: 'all', WebkitTransition: 'all', msTransition: 'all' }}>}
        return (
            <li className={classNames}>
                <span className="list-group-item-label"
                        onClick={onToggleProp}
                        data-toggle="rise">
                        
                    {name}
                </span>
                <input type="text" className="list-group-item-input" value={salary + '$'} onChange={this.onChangeSalary} />
                <div className="d-flex justify-content-center align-items center">
                    <button 
                        type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleProp}
                        data-toggle="increase" >
                            <i className="fas fa-cookie"></i>
                    </button>

                    <button 
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                            <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );    
    }
}

export default EmployeesListItem;