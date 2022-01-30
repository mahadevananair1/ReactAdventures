import React, {useState} from "react";
import ExpensesFilter from "../ExpenseGraph/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import './ExpenseItemGroup.css';
import ExpenseChart from "./ExpenseChart";

// Self closing tags are good in case of readability Hence I switched
function ExpenseItemGroup(props) {

  const [filteredYear,setYear] = useState('2022')
  const expensesFilterDateHandler = (selectedYear) => {
    // console.log(selectedYear)
    setYear(selectedYear)
  }

const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear)





  return (
    <div>
    <li className="expenses">
    <ExpensesFilter selected={filteredYear} ChangeDate = {expensesFilterDateHandler}/>
      
      {/* {filteredExpenses.length === 0 && <p>No items to showcase in this year</p>}

      { 
        filteredExpenses.length > 0 && filteredExpenses.map((expense) => (<ExpenseItem key={expense.id} title = {expense.title} amount={expense.amount} date={expense.date}/> )) 
      } */}
      <ExpenseChart expenses = {filteredExpenses}/>
      <ExpensesList expenses = {filteredExpenses}/>

     
    </li>
    <p className="creator-tag">Created by Mahadevan A Nair</p>
    <p className="creator-tag"><a style={{color:'white'}} href="https://www.github.com/mahadevananair1">Visit my GITHUB😉</a></p>
    </div>
  );
}

export default ExpenseItemGroup;
