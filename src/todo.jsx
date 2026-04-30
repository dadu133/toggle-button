import { useState } from 'react'
import './App.css'
import Todoform from './todoform'
import Todolist from './todolist'
import Tododatetime from './tododatetime'
function App() {
  function gettodos(){
 const rawtodos=localStorage.getItem("reactodo");
    if(!rawtodos){
      return [];
    }
    return JSON.parse(rawtodos);
  }
  const [task,setTask] = useState(gettodos());

   function handletodo(inputvalue) {
         const { id, content, checked } = inputvalue;
    //to check if the input field is empty or not
    if (!content) return;
    const ifTodoContentMatched = task && task.find((curTask) => curTask.content === content);
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [{ id, content, checked },...prevTask]);
  }
  localStorage.setItem("reactodo",JSON.stringify(task));
  function handlecheckedtodo(ttask){
     const updatedtask=task.map((currtask)=>{
      if(currtask.content===ttask){
        return {...currtask,checked:!currtask.checked}
      }
      else{
        return currtask;
      }
     })
     setTask(updatedtask);
  }
  function handletododelete(value){
    const find=task.filter((currvalue)=>currvalue.content!==value)
    setTask(find);
  }
  return (
    <>
      <div className="todo-container">
        <h1>Todo list</h1>
        <Tododatetime></Tododatetime>
        <Todoform onAddtodo={handletodo}></Todoform>
        <ul className=' flex flex-col'>
          {task && task.map((currele,index) => {
            return <Todolist key={index} currele={currele.content} ondeletetodo={handletododelete} checked={currele.checked} oncheckedtodo={handlecheckedtodo}></Todolist>
          })}
          <button onClick={()=>setTask("")}>Clear all</button>
        </ul>
    </div>
    </>
  )
}

export default App
