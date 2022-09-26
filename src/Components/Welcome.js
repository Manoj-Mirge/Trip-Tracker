import{useHistory} from 'react-router-dom';


function Welcome(props) {
	const  history=useHistory();
	
	function clickHandeler() {
		history.replace("/addfriends");
	}

	return (
		<div>
		<h1>Welcome</h1>
		<button onClick={clickHandeler}>Start</button>
		</div>
		);

}

export default Welcome;