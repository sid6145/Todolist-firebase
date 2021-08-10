import './App.css';
import {Button, TextField} from '@material-ui/core'
 
function App() {
  return (
    <div className="App">
      <div style={{display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
          <h3>TodoList</h3>
          <div style={{display:'flex', justifyContent:'space-evenly', width:'30%'}}>
            <TextField style={{width:'20vw'}} id="standard-basic" label="Add an item" />
            <Button  variant="contained">+</Button>
          </div>
         
      </div>
    </div>
  );
}

export default App;
