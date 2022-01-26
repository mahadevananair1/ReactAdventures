import React, {useState} from "react";
import ExpensesFilter from "../ExpenseGraph/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import './ExpenseItemGroup.css';

// Self closing tags are good in case of readability Hence I switched
function ExpenseItemGroup(props) {

  const [filteredYear,setYear] = useState('2020')
  const expensesFilterDateHandler = (selectedYear) => {
    // console.log(selectedYear)
    setYear(selectedYear)
  }

const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear)





  return (
    
    <li className="expenses">
    <ExpensesFilter selected={filteredYear} ChangeDate = {expensesFilterDateHandler}/>
      
      {/* {filteredExpenses.length === 0 && <p>No items to showcase in this year</p>}

      { 
        filteredExpenses.length > 0 && filteredExpenses.map((expense) => (<ExpenseItem key={expense.id} title = {expense.title} amount={expense.amount} date={expense.date}/> )) 
      } */}

      <ExpensesList expenses = {filteredExpenses}/>

     
    </li>
  );
}

export default ExpenseItemGroup;
