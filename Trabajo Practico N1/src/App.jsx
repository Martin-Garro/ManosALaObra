import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './style.css'
import { FaTrash } from 'react-icons/fa';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="body">
        <h1 className="Titulo">Lista de tareas de martin</h1>
          <div className="addTask">
            <input className="addTaskInput" placeholder="Ingrese una nueva tarea" type="text"/>
            <button className="addTaskButton">ADD</button>
          </div>
          <div class="task-list">
            <ul><div><input type="checkbox" name="packersOff" value="1"/><label className="strikethrough">TASK N</label></div><button><FaTrash /></button></ul>
            <ul><div><input type="checkbox" name="packersOff" value="1"/><label className="strikethrough">TASK N-1</label></div><button><FaTrash /></button></ul>
            <ul><div><input type="checkbox" name="packersOff" value="1"/><label className="strikethrough">Completed TASK N-2</label></div><button><FaTrash /></button></ul>
            <ul><div><input type="checkbox" name="packersOff" value="1"/><label className="strikethrough">TASK K</label></div><button><FaTrash /></button></ul>
            <ul><div><input type="checkbox" name="packersOff" value="1"/><label className="strikethrough">TASK 2</label></div><button><FaTrash /></button></ul>
            <ul><div><input type="checkbox" name="packersOff" value="1"/><label className="strikethrough">Completed TASK 1</label></div><button><FaTrash /></button></ul>
            
          </div>
      </div>
    </>
  )
}

export default App
