import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  

  return (
      <div>
        <Card className="Expenses">
          <ExpensesFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler} 
          />
          {props.items.map((expense) => ( 
            <ExpenseItem 
              title={expense.title} 
              amount={expense.amount} 
              date={expense.Date} 
            />
            )) } ;
      
          
        </Card>
      </div>
    );
};

export default Expenses;