import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function Compo({ status }) {
  return <div>Hello {status == 0 ? "3iyan a bro" : "nah u good"}</div>;
}

function App() {
  function handleState() {
    setState(20);
  }
  function FetchUsers({arr ,setUsers}) {
    function handleRemove(us){
      const newListUsers = arr.filter(user => us.name != user.name)
      setUsers(newListUsers)
    }
    return (
      <div>
        {arr.map((user) => (
          <div>
            {user.name} : {user.nationality} <button onClick={()=> handleRemove(user)}>remove user</button>
          </div>
        ))}
      </div>
    );
  }
  const txt = "React";
  const [state, setState] = useState(0);
  const [users,setUsers] = useState( [
    { name: "ali", nationality: "marocain" },
    { name: "alex", nationality: "francais" },
    { name: "chonhook", nationality: "chinoix" },
    { name: "simon", nationality: "american" },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        Hello {state == 0 ? "its null bro" : "im good"}
        <Compo status={state} />
        <button onClick={handleState}>update state</button>
        {users.length != 0 ?<FetchUsers arr={users} setUsers={setUsers}/> : 'there is no longer users in this app :C' }
      </header>
    </div>
  );
}

export default App;
