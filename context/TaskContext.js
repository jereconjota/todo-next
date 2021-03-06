import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);
    const hola = 'hello';

    const createTask = (title, description) => {
        setTasks([...tasks, {title, description, id: uuid()}]);
    }

    const updateTask = (id, title, description) => {
        setTasks([...tasks.map(task => task.id === id ? {...task, title, description} : task)]);    
    }

    const deleteTask = (id) => setTasks([...tasks.filter((task) => task.id !== id)]);

    return (
        <TaskContext.Provider value={{ tasks, hola, createTask, updateTask, deleteTask}}>
            {children}
        </TaskContext.Provider> 
    );
}

export const useTasks = () => useContext(TaskContext);

/**
import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const TaskContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, description) =>
    setTasks([...tasks, { id: uuid(), title, description }]);

  const updateTask = (id, updatedTask) =>
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      ),
    ]);

  const deleteTask = (id) =>
    setTasks([...tasks.filter((task) => task.id !== id)]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TaskContext);
};
 */
