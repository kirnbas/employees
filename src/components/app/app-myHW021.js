import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                { name: 'John C.', salary: 800, increase: false, rise: true, id: 1 },
                { name: 'Zero L.', salary: 3000, increase: true, rise: false, id: 2 },
                { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 },
            ],
            term: '',
            selection: 0 // 0 - Все сотрудники, 1 - На повышение, 2 - З/П больше 1000$
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== id)
            }
        });
    };

    addItem = (name, salary) => {
        this.setState(({data}) => {
            return { 
                data: [...data, { name, salary, increase: false, rise: false, id: this.maxId++ }]
            }
        });
    };

    onToggleProp = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);

        //     const old = data[index];
        //     const newItem = { ...old, increase: !old.increase };
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            
        //     return {
        //         data: newArr
        //     }
        // });

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }));
    }

    searchEmp = (items, term) => {
        if (term.length === 0){
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    }

    filterEmp = (items, selection) => {        
        const salaryOver = 1000;

        switch (selection) {
            case 1: 
                return items.filter(item => item.rise);
            case 2: 
                return items.filter(item => item.salary > salaryOver);
            default: 
                return items;
        }
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    onFilterSelected = (selectionValue) => {
        this.setState({ selection: selectionValue });
    }

    render() {
        const { data, term, selection } = this.state;
        const countTotal = data.length;
        const countIncreased = data.reduce((sum, current) => {
            if (current.increase)
                return sum + 1;
            return sum;
        }, 0);        
        const visibleData = this.filterEmp(this.searchEmp(data, term), selection);

        return (
            <div className="app">
                <AppInfo 
                    countTotal={countTotal}   
                    countIncreased={countIncreased} >                
                </AppInfo>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter onFilterSelected={this.onFilterSelected} />
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                    
                <EmployeesAddForm
                    onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;