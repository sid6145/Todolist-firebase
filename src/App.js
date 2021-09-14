import "./App.css";
import { Button, List, ListItem, TextField, Typography } from "@material-ui/core";
import firebase from "firebase";
import { db } from "./firebase-config";
import { useEffect, useState } from "react";
import Todolist from "./Todolist";
import Footer from './footer'

function App() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
    getTodo();
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
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh"
        }}
      >
        <Typography style={{padding:"50px 0", color:"#1d3557"}} variant="h4">TODOLIST</Typography>
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
            style={{ width: "20vw", minWidth: "250px",  }}
            id="standard-basic"
            label="Add an item"
          />
          <Button className="add-btn" style={{marginLeft:"3px"}} onClick={addTodo} variant="outlined">
            +
          </Button>
        </div>

        {todolist.map((item) => (
          <Todolist
            todoitem={item.todo}
            inprogress={item.inprogress}
            id={item.id}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
