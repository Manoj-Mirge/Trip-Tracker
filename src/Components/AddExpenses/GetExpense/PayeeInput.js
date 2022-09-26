

function PayeeInput(props) {
    let PayeeInputList=props.friends.map((fname,id)=>{
    return (<div key={id}>{fname} : <input type="number" value={props.payee[id]} name={id} onChange={payeechangeHandeler}/> </div>) ;
    });

    function payeechangeHandeler(e) {
     props.setPayee((prev)=>{   
     prev[parseInt(e.target.name)]=e.target.value;
     return [...prev]; 
     });  	
    }

	return (
		<div>
		<h3>Payee</h3>
		{PayeeInputList}
		<button onClick={props.submitHandeler}>Submit Expense</button>
		</div>
		);
}

export default PayeeInput;