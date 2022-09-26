import {useState} from 'react';
import Expenses from "./Expenses/Expenses.js";
import GetExpense from "./GetExpense/GetExpense.js";
import getMatrix from "./GetMatrix.js";
import{useHistory} from 'react-router-dom';

function AddExpenses(props) {
	const [expenses ,setExpenses]=useState([]);
	const history=useHistory();

	function clickHandeler() {

      let matrix=getMatrix(expenses,props.friends.length);
      props.setCostMatrix(matrix);
      history.replace("/transactions");		
	}
	function removeExpense(id) {
		setExpenses((prev)=>{
		prev.splice(id,1);	
        return [...prev];
		});
	}

	function addExpense(expense) {
		setExpenses((prev)=>([expense,...prev]));
	}

	return (
		<div>
		<h1>AddExpances</h1>
        <Expenses expenses={expenses} removeExpense={removeExpense}/>
        <GetExpense setExpenses={setExpenses} friends={props.friends} addExpense={addExpense}/> 
        <button onClick={clickHandeler}>Submit Expenses</button>
        </div>
		);

}
export default AddExpenses;