// src/components/TaskList/TaskList.js
import React from "react";
import "./Style.scss"; // Opcional si tienes estilos específicos
import { FaTrash } from "react-icons/fa";
import {IoShareSocial} from "react-icons/io5";
import {BsFillClipboardFill} from "react-icons/bs";

function TaskList({ tasks, deleteTask }) {
  // Comprobamos si no hay tareas para mostrar un mensaje
  if (tasks.length === 0) {
    return (
      <div className="task-list">
        <ul>
          <div className="noTask">
            <label>No hay tareas</label>
          </div>
        </ul>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <ul key={task.id}>
          
          
            <input type="checkbox" name="packersOff" value="1" id={`task-${task.id}`}/>
          

          <div className="name">
            <label className="strikethrough">{task.tarea}</label>
          </div>
          
          <div className="buttons">
            <button onClick={()=> copyTask(task.id)}> 
              <i className="copy"><BsFillClipboardFill/></i> 
            </button>
            
            <button onClick={()=> shareTask(task.id)}>
              <i className="share"><IoShareSocial/></i> 
            </button>

            <button onClick={() => deleteTask(task.id)}>
              <i className="trash"><FaTrash /></i>
            </button>
          </div>
          
        </ul>
      ))}
    </div>
  );
}

export default TaskList;