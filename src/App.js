import React from 'react';
import './App.css';
import { TodoItem } from './components/TodoItem';
import { AddTodo } from './components/AddTodo';

function App() {
  const [todo,setTodo] = React.useState([]);

   function getItem(item) {
    console.log(item);
    setTodo((prevState) => {
      return [...prevState, item];
    });
  }
const getCompeted =(id)=>{
setTodo((prevState)=>{
  return prevState.filter((item,index)=> {
    return index !== id
  })
})
}
  return (
    <div className='wrapper'>
    <div className="App">
     <h1 className='title'> My <span>to</span><span>do</span> list</h1>
     <AddTodo item = {getItem}/>
     {
      todo &&todo.map((todo,index)=>(<TodoItem id = {index} item = {todo} completed = {getCompeted}/>)
        
      )
     }
     
    </div></div>
  );
}

export default App;
