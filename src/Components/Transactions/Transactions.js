import minCashFlow from './MinCashFlow.js';
import {useState} from 'react';

function Transactions(props) {
    const [transactions,setTransactions]=useState([]);
    
    function getTransactions() {
    	let List=minCashFlow(props.costMatrix,props.friends.length);
    	let transactionsList=List.map((transaction,id)=>{
         return <div key={id}><li>{props.friends[transaction.from]}---->{props.friends[transaction.to]} Amount:{transaction.amount} </li></div>
    	});
    	setTransactions(transactionsList);
    }
	return (
		<div>
		<h1>Transactions</h1>
		{(transactions.length>0)?(transactions):(<button onClick={getTransactions}>Get</button>)}

		</div>
		);

}
export default Transactions;