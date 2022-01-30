import React,{useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    const [trigger_val,setTriggerVal] = useState("0");
    
    // const [userInput, setUserInput]= useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        // setUserInput((prevState)=>{
        //     return{ ...prevState, enteredTitle: event.target.value };
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredAmount: event.target.value };
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredAmount: event.target.value };
        // })
    };

    const triggerChangeHandler = (event) => {
        setTriggerVal("0");
        event.preventDefault();
        console.log("triggerChangeHandler is activated");
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredAmount: event.target.value };
        // })
    };

    const triggerHandler = (event) => {
        event.preventDefault();
        setTriggerVal("1");
        console.log("triggerHandler activated");
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        // console.log(expenseData);
        // this code will send expenseData to the Save expense data handler funtion
        // in the NewExpense.js file
        props.saveExpenseData(expenseData);
        


        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setTriggerVal("0");
        console.log(trigger_val);

    };

    if (trigger_val === "1"){
        return (
        <form onSubmit={submitHandler} >
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} ></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2019-02-01" max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} ></input>
            </div>
        </div>
        <div className='new-expense__actions_submit'>
            <button type='submit'  onChange = {triggerChangeHandler}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
        )
    } else 
    return (
        <form onSubmit = {triggerHandler}>
        <div className='className="new_item_button"'>
            <button type='submit'  onChange = {triggerChangeHandler} >New Item!</button>
        </div>
    </form>
        
    )
};

export default ExpenseForm;