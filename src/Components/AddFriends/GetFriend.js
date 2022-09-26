import {useState} from 'react';

function GetFriend(props) {
	const [name,setName]=useState("");
    function clickHandeler() {
    	props.addFriend(name);
    	setName("");
    }
    function changeHandeler(e) {
    	setName(e.target.value);
    }
	return (
		<div>
		<label>Name:</label><br/>
		<input type="text" value={name} onChange={changeHandeler}/><br/>
		<button onClick={clickHandeler}>Add Friend</button>
		</div>
		)
}

export default GetFriend;