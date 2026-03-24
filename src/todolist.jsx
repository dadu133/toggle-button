import React from 'react'
import { MdDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function Todolist({currele,ondeletetodo,checked,oncheckedtodo}) {
    
    return (
     <div className='flex'>
              <li>
                <span className={checked?"checked":"notchecked"}>{currele}</span>
              <button>
              <MdDone onClick={()=>oncheckedtodo(currele)}></MdDone>
              </button>
              <button onClick={()=>ondeletetodo(currele)}>
              <MdDelete></MdDelete>
              </button>
              </li>
            </div>
    
  )
}
