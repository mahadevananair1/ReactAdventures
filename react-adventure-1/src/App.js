import { useState } from "react";
import NewExpense from "./components/ExpenseInput/NewExpense";
import ExpenseItemGroup from "./components/ExpenseTiles/ExpenseItemGroup";


const DummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'ipad',
    amount: 604.67,
    date: new Date(2022, 4, 14),
  },
  {
    id: 'e5',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e6',
    title: 'New Computer',
    amount: 480,
    date: new Date(2021, 8, 2),
  },
  {
    id: 'e7',
    title: 'New Stove',
    amount: 180,
    date: new Date(2022, 9, 18),
  },
];

function App() {

  const[expenses,setExpenses] = useState(DummyExpenses)
  

  const addExpenseDataHandler = (expenseData) =>{
    console.log("app.js")
    console.log(expenseData);

    
    // this method wont work we have to use prevExpenses 
    // object provided by react. Because we are depending on
    // previous dummy expense values while adding new one
    
    

    // setExpenses([expenseData,...expenses]);
    setExpenses((prevExpenses) =>{
      return [expenseData,...prevExpenses]
    } )
  }
  

  return (
    <div>
      
      
      <NewExpense addExpenseData = {addExpenseDataHandler}/>
      {/* Yeah a self closing tag is enough */}
      <ExpenseItemGroup expenses = {expenses}/>
    </div>
  )
  }

export default App;
