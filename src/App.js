import './App.css';
import {Button, TextField} from '@material-ui/core'
import firebase from 'firebase'
import { db } from './firebase-config'
import { useState } from 'react';
 
function App() {

  const [todo, setTodo] = useState("")

  const addTodo = () => {
    db.collection("todo").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todoitem: todo
    })

    setTodo("")
    

  }

  console.log(todo)

  return (
    <div className="App">
      <div style={{display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
          <h3>TodoList</h3>
          <div style={{display:'flex', justifyContent:'space-evenly', width:'30%'}}>
            <TextField value={todo} onChange={(e) => setTodo(e.target.value)} style={{width:'20vw', minWidth:'300px'}} id="standard-basic" label="Add an item" />
            <Button onClick={addTodo} variant="contained">+</Button>
          </div>
         
      </div>
    </div>
  );
}

export default App;
