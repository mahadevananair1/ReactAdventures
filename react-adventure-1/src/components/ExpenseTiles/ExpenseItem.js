import DateComponent from './DateComponent';
import React, { useState } from "react";
import './ExpenseItem.css';
function ExpenseItem(props) {


  const [title,setTitle] = useState(props.title);

  const clickHandler = () =>{ setTitle("updated!"); console.log(title);};

  return (
    <div className="expense-item">
      {/* DATE Component */}
      <DateComponent date={props.date}></DateComponent>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    
      <button onClick = {clickHandler} >Hey button</button>
    </div>
  );
}

export default ExpenseItem;
