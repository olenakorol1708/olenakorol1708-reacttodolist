import React from 'react'

export const AddTodo = (props) => {
    const [item, setItem] = React.useState('');
    const [isDisable, setIsDisable] = React.useState(true);
  

    const handleSubmit = (e)=>{
     e.preventDefault();
     props.item(item)

    }

    const handleChange =(event)=>{
      const value = event.target.value;
    setItem(value);
    if(value !== '')
    setIsDisable(!isDisable)
  
     
    
    
    }


  return (
    <div>
        <form method='post' onSubmit = {handleSubmit}>
       <input className = "addtask" type = "text" value = {item} onChange = {handleChange}placeholder = "Enter task"  /> 
       <button className='addbutton' disabled = {isDisable} >Add task</button> 
       </form>
    </div>
  )
}
