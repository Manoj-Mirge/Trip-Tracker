
function PartiInput(props) {
	let participantsinput=[];
    participantsinput=props.friends.map((fname,id)=>{
     return <div key={id}><input type="checkbox"  value={id} checked={props.participants.includes(id)} onChange={partichangeHandeler}/>{fname}</div>;
    });

    function partichangeHandeler(e) {
	 props.setParticipants((prev)=>{
     let new_p=[];
     if(e.target.checked){
      prev.push(parseInt(e.target.value))
     }
     else{
      let index = prev.indexOf(parseInt(e.target.value));
      if (index > -1) {
      prev.splice(index, 1);
       }
     } 
     return [...prev];
	 });	
	}

	return (
	<div>
	<h3>The participants</h3>
	{participantsinput}
	<button onClick={props.inputclickHandeler}>Submit Participants</button>
	</div>
	)

}

export default PartiInput;