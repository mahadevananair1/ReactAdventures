import DateComponent from './DateComponent';
import './ExpenseItem.css';
function ExpenseItem(props) {



  return (
    <div className="expense-item">
      {/* DATE Component */}
      <DateComponent date={props.date}></DateComponent>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
