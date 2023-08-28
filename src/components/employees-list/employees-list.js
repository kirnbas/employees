import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onChangeSalary}) => {

     const elements = data.map(item => {
        const {id} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...item}
                onChangeSalary={onChangeSalary}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
        );
     });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeesList;