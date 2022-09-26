import {useState} from 'react';
import GetFriend from "./GetFriend";
import{useHistory} from 'react-router-dom';

function AddFriends(props) {
	const [friends,setFriends]=useState([]);
	const history=useHistory();
    let FriendsList=[];
    FriendsList=friends.map((name,id)=>(<li key={id}>{name}</li>)); 	
    
    
    function clickHandeler() {
    	props.setFriends(friends);
    	history.replace("/addExpenses")

    }

	function addFriend(name) {
	    setFriends((prev)=>([name,...prev]));    	
	}
     
	return (
		<div>
		<h1>Add Friends</h1>
        <ul>
        {FriendsList}
        </ul>
        <GetFriend addFriend={addFriend}/>
        <button onClick={clickHandeler}>Submit</button>
		</div>
		);

}
export default AddFriends;