
function Expense(props) {
  function clickHandeler() {
  	props.removeExpense(props.index);
  }
  return (
    <div>
    <h3>{props.expense.name}</h3> 
    <button onClick={clickHandeler}> Remove</button>
    </div>
  	) 	
}

export default Expense;