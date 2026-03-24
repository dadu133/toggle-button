import React from 'react'

export default function Todoform({onAddtodo}) {
  const [inputvalue, setInputvalue] = React.useState({});
   
    function handleinputvalue(value) {
    setInputvalue({id:value,content:value,checked:false});
    //console.log(inputvalue);
  }
  function handletodosubmit(event){
    event.preventDefault();
    onAddtodo(inputvalue)
     setInputvalue({id:"",content:"",checked:""});  
  }
  return (
    <div>
      <form onSubmit={handletodosubmit}>
          <input type='text' autoComplete='off' className='todo-input' value={inputvalue.content} onChange={(e)=>handleinputvalue(e.target.value)}></input>
          <button type='submit'>Add task</button>
        </form>
    </div>
  )
}
