
import Expense from "./Expense";


function Expenses(props) {
	
	let ExpensesList =props.expenses.map((expense,id)=>{	
    return <li key={expense.name+id}><Expense expense={expense} index={id} removeExpense={props.removeExpense}/></li>; 
	});

	return (
		<div>
		<ul>
		{ExpensesList}
		</ul>
		</div>
		);
}

export default Expenses;