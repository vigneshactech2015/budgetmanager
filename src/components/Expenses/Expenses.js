import React,{useState} from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css'
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpenseFilter';
const Expenses=(props)=>{
  const [filteredYear,setFilteredYear]=useState('2020');
  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear);
  };
//to filter something(here it is year)
  const filteredExpenses =props.items.filter(expense=>{
      return expense.date.getFullYear().toString()===filteredYear;
    }
  );
return(
  <div>
    <Card className="expenses">
    <ExpensesFilter 
    selected={filteredYear} 
     onChangeFilter={filterChangeHandler}
     />
     <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList items={filteredExpenses}/>
  </Card>
  </div>
  )}


export default Expenses;