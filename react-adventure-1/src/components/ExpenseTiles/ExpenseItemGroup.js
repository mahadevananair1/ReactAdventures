import React, {useState} from "react";
import ExpensesFilter from "../ExpenseGraph/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import './ExpenseItemGroup.css';

// Self closing tags are good in case of readability Hence I switched
function ExpenseItemGroup(props) {

  const [filteredYear,setYear] = useState('2020')
  const expensesFilterDateHandler = (selectedYear) => {
    // console.log(selectedYear)
    setYear(selectedYear)
  }

  return (
    
    <div className="expenses">
    <ExpensesFilter selected={filteredYear} ChangeDate = {expensesFilterDateHandler}/>
      
      {props.expenses.map((expense) => (<ExpenseItem title = {expense.title} amount={expense.amount} date={expense.date}/> ))}
      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      /> */}
    </div>
  );
}

export default ExpenseItemGroup;
