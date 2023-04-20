import React from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import {RiCloseCircleLine} from 'react-icons/ri';
import { TitleBlock } from './components/TitleBlock';

function App() {
  const [item,setItem] = React.useState('');
  const[todos,setTodos] = React.useState([]);
  const inputRef = React.useRef();
  const handleSubmit = (e)=>{
    e.preventDefault();
  

   }
React.useEffect(()=>{
  inputRef.current.focus();
},[setTodos]);


const newItem = ()=>{
  if(item.trim() !== ''){
    
    const newItem = {
      id: uuidv4(),
      item:item,
    }
    setTodos((todos)=>[...todos,newItem]);
 
   

  }else{
    alert('Enter something')
  }
  setItem('')
 
}


const handleChange =(e)=>{

setItem(e.target.value)
console.log(item)
}
const deleteTask = (id)=>{

setTodos([...todos].filter(item=>item.id !== id))
}

return(
  <div className = "App">
<TitleBlock/>
     
  <form onSubmit = {handleSubmit} >
       <input className = "addtask" onChange = {handleChange} type = "text" ref = {inputRef} value = {item} placeholder = "Enter task"  /> 
       <button className='addbutton' disabled = {!item} onClick = {newItem}>Add task</button> 
  </form>
  {
    todos&&todos.map((item,index)=>(
      <div className='item'>
        <div className='text-item'>
   
        {`${item.item}`}
        
      </div>
      <div className='icons-edit'>
        <div className = "icons-edit-del"><RiCloseCircleLine className = 'delete-button' onClick = {()=>deleteTask(item.id)}/></div>
      
        </div>
      </div>
    ))
  }
    
  </div>
)
}

export default App;