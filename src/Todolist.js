import React from 'react'
import { ListItemText} from '@material-ui/core'

export default function Todolist(props) {
    return (
    <div style={{display:"flex", height:"50px"}}>
         <ListItemText primary={props.todoitem} secondary={props.inprogress ? "in progress" : "completed"} />
        <button>done</button>
        <button>x</button>
    </div>
      
      
    )
}
