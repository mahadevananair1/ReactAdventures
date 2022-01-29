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
        console.log(expenseData);
        props.addExpenseData(expenseData);
    }

    // we need to make this form disappear until the user clicks new item 
    // Moreover we need to make the form disappear when user clicks cancel 

    // if add new item is clicked a variable is turned = 1 (or true) show the ExpenseForm
    // if cancel is cliked Variable is turned 0
    
    // and after submition also the Variable turns 0

    


    return (
        <div className='new-expense'>
           <ExpenseForm saveExpenseData={saveExpenseDataHandler} ></ExpenseForm>
        </div>
    )
};

export default NewExpense;