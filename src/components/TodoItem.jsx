import React from 'react'

export const TodoItem = (props) => {
  return (
    <div className='item'>
    <div><input type = "checkbox" onChange = {()=>props.completed(props.id)}/></div>
   <div><p>{props.item}</p>  </div> 
    </div>
  )
}
