import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            // The data we get as argument
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        // console.log(expenseData);
        props.addExpenseHandler(expenseData);
    }

   

    return (
        <div className='new-expense'>
           <ExpenseForm saveExpenseData={saveExpenseDataHandler} ></ExpenseForm>
        </div>
    )
};

export default NewExpense;