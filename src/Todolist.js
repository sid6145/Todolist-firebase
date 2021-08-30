import React from "react";
import { Button, ListItem, ListItemText } from "@material-ui/core";
import './todolist.css'
import { db } from "./firebase-config";

function Todolist({todoitem, id, inprogress}) {
  
  const toggleInprogress = () =>{
      db.collection("todo").doc(id).update({
          inprogress: !inprogress,
      });
  }
  
  const deleteItem = () => {
      db.collection("todo").doc(id).delete()
  }
  
   
  
    return (
    <div className={inprogress ? "inprogress" : "completed"} style={{ display: "flex", marginTop: "10px", justifyContent:"space-around",  }}>
      <ListItem className="list-item">
        <ListItemText
          primary={todoitem}
          secondary={inprogress ? "in progress" : "completed"}
        />
      </ListItem>

      <Button className={inprogress ? "" : "done"} onClick={toggleInprogress}>
        {inprogress ? "Done" : "Undone"}
        
      </Button>
      <Button className="delete" onClick={deleteItem}>x</Button>
    </div>
  );
}


export default Todolist