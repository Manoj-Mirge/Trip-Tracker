import {useState} from 'react';
import PartiInput from "./PartiInput.js";
import PayeeInput from "./PayeeInput.js";

function GetExpense(props) {
	const [inputStatus,setInputStatus]= useState(1);
	const [name, setName]=useState("");
    const [participants,setParticipants]=useState([]);
    const [payee,setPayee]=useState(new Array(props.friends.length).fill(0));
    function namechangeHandeler(e) {
		setName(e.target.value);
	}
	function inputclickHandeler() {
		setInputStatus(prev=>prev+1);
	}
    let name_inputjsx=(<div>
    	               <h3>Expense Name:</h3>
    	               <input type="text" value={name} onChange={namechangeHandeler}/><br/>
    	               <button onClick={inputclickHandeler}>Submit Name</button>
    	               </div>
    	               );  
	

	function submitHandeler() {
	   let expense={
	   	name:name,
	   	participants:[...participants],
	   	payee:[...payee]
	   }
	   setName("");
	   setParticipants([]);
	   setPayee((prev)=>{
	   	prev.fill(0);
	   	return [...prev];
	   })
	   setInputStatus(1);
	   props.addExpense(expense);
	}
	

	return (
		<div>
	    {inputStatus==1 && name_inputjsx}
	    {inputStatus==2 && <PartiInput participants={participants} setParticipants={setParticipants} friends={props.friends} inputclickHandeler={inputclickHandeler}/>}
	    {inputStatus==3 && <PayeeInput payee={payee}  setPayee={setPayee} friends={props.friends} submitHandeler={submitHandeler}/>} 	
		</div>
		);
}

export default GetExpense;