// src/App.js
import React, { useState } from "react";
// Opcional si tienes estilos específicos
import Header from "../Header/Header.jsx";
import TaskList from "../TaskList/TaskList.jsx";
import "../../style.scss";
import "./Style.scss";
import "../Themes/Style.scss";
import { IoInvertModeSharp } from "react-icons/io5";


;

function App() {
  // Declaración de estados locales con los hooks useState
  const [taskList, setTaskList] = useState([]);// Estado para almacenar la lista de tareas
  const [deletedTasks, setDeletedTasks] = useState([]);// Estado para almacenar las tareas eliminadas
  const [isDarkMode, setIsDarkMode] = useState(false);


  // Función para agregar una nueva tarea a la lista
  const saveTask = (newTask) => {
    const taskId = Date.now();// Genera un ID único basado en la marca de tiempo
    const newTaskItem = { id: taskId, tarea: newTask };// Crea un objeto con el ID y la tarea
    setTaskList([newTaskItem, ...taskList]);// Agrega la nueva tarea a la lista existente
  };

  // Función para manejar la eliminación de una tarea
  const handleDeleteTask = (taskId) => {
    setDeletedTasks([...deletedTasks, taskId]);// Agrega el ID de la tarea eliminada a la lista de tareas eliminadas
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);// Filtra las tareas que no coinciden con el ID eliminado
    setTaskList(updatedTaskList);// Actualiza la lista de tareas sin la tarea eliminada
  };

  // Función para cambiar el tema de la aplicación
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);

    // Luego, se verifica el valor de `isDarkMode` después de invertirlo.
    if (isDarkMode) {
      // Si `isDarkMode` es `true`, se ejecuta este bloque de código.
      // Esto significa que se está cambiando de modo oscuro a modo claro

        // Se quita la clase 'light-mode' del elemento 'body' del documento HTML.
        document.body.classList.remove('light-mode');

        // Se agrega la clase 'dark-mode' al elemento 'body' del documento HTML.
        document.body.classList.add('dark-mode');
    } else {
      // Si `isDarkMode` es `false`, se ejecuta este bloque de código.
      // Esto significa que se está cambiando de modo claro a modo oscuro

      // Se quita la clase 'dark-mode' del elemento 'body' del documento HTML
        document.body.classList.remove('dark-mode');

      // Se agrega la clase 'light-mode' al elemento 'body' del documento HTML.
        document.body.classList.add('light-mode');
    }
};

  return (
     
        <div className="">
          
          <h1 className="Titulo">Lista de tareas de martin <button className="ButtonTheme" onClick={toggleMode}><IoInvertModeSharp/></button></h1> 
          <div className="divider"></div>
          <Header addTask={saveTask} />
          <TaskList tasks={taskList} deleteTask={handleDeleteTask} />
        </div>
  );
}

export default App;
/* El componente TaskList se encarga de mostrar una lista de tareas, y recibe dos propiedades como argumentos: tasks y 
deleteTask. tasks contiene la lista de tareas que se mostrarán, y deleteTask es una función que se utilizará para eliminar 
tareas.

El componente primero verifica si la lista de tareas está vacía. Si no hay tareas, muestra un mensaje "No hay tareas".

Si hay tareas en la lista, recorre cada tarea utilizando el método map y crea una representación visual para cada tarea.

Cada tarea se muestra en una estructura ul (lista desordenada) con un key único basado en el ID de la tarea.

Para cada tarea, se muestra un cuadro de verificación (input type="checkbox"), el nombre de la tarea, y tres botones: uno 
para copiar la tarea, otro para compartirla y otro para eliminarla.

Los iconos de copia, compartir y eliminar se muestran utilizando los iconos de BsFillClipboardFill, IoShareSocial y FaTrash, 
respectivamente,que se importan de las bibliotecas de iconos "react-icons".

Los botones tienen manejadores de eventos onClick que llaman a las funciones copyTask(task.id), shareTask(task.id) y 
deleteTask(task.id) respectivamente.*/
