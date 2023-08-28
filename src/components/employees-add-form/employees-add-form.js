import { Component } from 'react';

//import './employees-add-form.css';
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    
    state = {
        name: '',
        salary: ''
    }    

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => { 
        const { onAdd } = this.props;
        const { name, salary } = this.state;

        onAdd(name, salary); 
        e.preventDefault(); 

        this.setState({
            name: '',
            salary: ''
        });
    };

    static onLog = () => {
        console.log('Hey');
    }

    static logged = 'on';

    render() {        
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3 className='text-white'>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        minLength="3"
                        required
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        required
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
};

EmployeesAddForm.onLog();
console.log(EmployeesAddForm.logged);

export default EmployeesAddForm;