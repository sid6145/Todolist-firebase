import "./App.css";
import { Button, List, ListItem, TextField } from "@material-ui/core";
import firebase from "firebase";
import { db } from "./firebase-config";
import { useEffect, useState } from "react";
import Todolist from "./Todolist";

function App() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
      getTodo()
  }, []);

  const addTodo = () => {
    db.collection("todo").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todoitem: todo,
    });

    setTodo("");
  };

  const getTodo = () => {
    db.collection("todo").onSnapshot(function (querySnapshot) {
      setTodolist(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todoitem,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  };

  console.log(todo);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3>TodoList</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "30%",
          }}
        >
          <TextField
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            style={{ width: "20vw", minWidth: "300px" }}
            id="standard-basic"
            label="Add an item"
          />
          <Button onClick={addTodo} variant="contained">
            +
          </Button>
        </div>

      
        {todolist.map((item) => (
    
          <Todolist todoitem={item.todo} inprogress={item.inprogress}/>
    
      ))}
     
      </div>
          

  
     

     
    </div>
  );
}

export default App;
