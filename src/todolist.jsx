import React, { useState } from 'react';
import { MdDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function Todolist({ currele, ondeletetodo, checked, oncheckedtodo }) {
  // local state for this todo’s input field
  const [inputText, setInputText] = useState("");

  return (
    <div className='flex'>
      <li>
        <span className={checked ? "checked" : "notchecked"}>{currele}</span>

        {/* Controlled input bound to local state */}
        <input
          type='text'
          className='todo-input'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button>
          <MdDone onClick={() => oncheckedtodo(currele)} />
        </button>
        <button onClick={() => ondeletetodo(currele)}>
          <MdDelete />
        </button>
      </li>
    </div>
  );
}