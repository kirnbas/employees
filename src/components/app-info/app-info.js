import './app-info.css';

const AppInfo = ({countTotal, countIncreased}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Zero</h1>
            <h2>Общее число сотрудников: {countTotal}</h2>
            <h2>Премию получат: {countIncreased}</h2>
        </div>
    );
};

export default AppInfo;