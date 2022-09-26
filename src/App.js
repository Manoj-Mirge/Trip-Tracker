
import "./App.css";

import {useState} from 'react';
import{Route,NavLink,Prompt,Switch} from 'react-router-dom';
import Welcome from "./Components/Welcome.js";
import AddFriends from "./Components/AddFriends/AddFriends.js";
import AddExpenses from "./Components/AddExpenses/AddExpenses.js";
import Transactions from "./Components/Transactions/Transactions.js";


function App() {
 const [costMatrix, setCostMatrix] =useState(null);
 const [friends,setFriends]= useState([]);
 

return (
    <div>
     <Switch>

     <Route path="/" exact>
     <Welcome/>
     </Route>

     <Route path="/addfriends" exact>
     <AddFriends setFriends={setFriends}/>
     </Route>

     <Route path="/addExpenses" exact>
     <AddExpenses setCostMatrix={setCostMatrix} friends={friends}/>
     </Route>

     <Route path="/transactions" exact>
     <Transactions costMatrix={costMatrix} friends={friends}/>
     </Route>
      
     <Route path="*" >
     404 Error
     </Route> 

     </Switch>
    </div> 
  );
  
}

export default App;

